import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { IResource } from 'src/app/api-interfaces';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit, DoCheck {

  constructor(
    private resourcesService: ResourcesService,
    private errorHandler: ErrorHandlerService
  ) { }

  loadingPromise?: Promise<any>;
  resources?: IResource[];
  selected: Set<number> = new Set();

  ngOnInit(): void {
    this.loadData();
  }
  ngDoCheck() {
    console.log("ResourceListComponent::ngDoCheck")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ResourceListComponent::ngOnChanges");
  }

  async loadData() {
    this.loadingPromise = this.resourcesService.list();

    try {
      this.resources = await this.loadingPromise;
    }
    catch(err) {
      this.handleError(err);
    }
  }

  private handleError(err: any) {
    this.errorHandler.handleError(err);
  }

  onSelect(id: number, event: Event) {
    const val = (event.target as HTMLInputElement).checked;
    val ? this.select(id) : this.unselect(id);
  }

  select(id: number) {
    this.selected.add(id);
  }

  unselect(id: number) {
    this.selected.delete(id);
  }

  isSelected(id: number) {
    return this.selected.has(id);
  }

  onSelectAll(event: Event) {
    const val = (event.target as HTMLInputElement).checked;
    val ? this.selectAll() : this.unselectAll();
  }

  selectAll() {
    this.selected = new Set(this.resources!.map(resource => resource.id));
  }
  unselectAll() {
    this.selected.clear();
  }

  get allSelected() {
    return this.selected.size == this.resources!.length;
  }
}
