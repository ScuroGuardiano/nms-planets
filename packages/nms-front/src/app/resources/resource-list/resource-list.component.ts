import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { AlertService, NotificationService, NotificationStyleType } from '@swimlane/ngx-ui';
import { IResource } from 'src/app/api-interfaces';
import AbstractDatatable from 'src/app/helpers/abstract-datatable';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent extends AbstractDatatable implements OnInit {

  constructor(
    private resourcesService: ResourcesService,
    private errorHandler: ErrorHandlerService,
    private notificationService: NotificationService,
    private alertService: AlertService
  ) {
    super();
  }

  loadingPromise?: Promise<any>;
  resources?: IResource[];

  ngOnInit(): void {
    this.loadData();
  }

  public getAllIds(): any[] {
    return this.resources?.map(r => r.id) ?? [];
  }

  // #region read
  async loadData() {
    this.selected.clear();
    this.loadingPromise = this.resourcesService.list();
    try {
      this.resources = await this.loadingPromise;
    }
    catch(err) {
      this.handleError(err);
    }
  }
  // #endregion

  // #region update
  async update(resource: IResource) {
    try {
      this.loadingPromise = this.resourcesService.update(resource.id, resource);
      const updated = await this.loadingPromise;
      this.resources = this.resources?.map(r => r.id === updated.id ? updated : r);
    }
    catch(err) {
      this.handleError(err);
    }
  }
  // #endregion

  // #region delete
  async onDelete(resource: IResource) {
    const confirmation = await this.alertService.confirm({
      title: `Deleting resource ${resource.name}`,
      content: `Do you really want to delete resource ${resource.name} (${resource.symbol})`
    }).toPromise();

    if (confirmation.type === "ok") {
      this.delete(resource);
    }
  }

  private async delete(resource: IResource) {
    this.loadingPromise = this.resourcesService.delete(resource.id);

    try {
      await this.loadingPromise;
      this.notificationService.create({
        title: `Deleted ${resource.name} (${resource.symbol})`,
        body: `Deleted ${resource.name} (${resource.symbol})`,
        styleType: NotificationStyleType.success,
        timeout: 8000
      });
      this.loadData();
    } catch(err) {
      this.handleError(err);
    }
  }

  async onDeleteSelected() {
    const confirmation = await this.alertService.confirm({
      title: `Deleting ${this.selected.size} records...`,
      content: `Do you really want to ${this.selected.size} resources?`
    }).toPromise();

    if (confirmation.type === "ok") {
      this.deleteSelected();
    }
  }

  private async deleteSelected() {
    // TODO: Add to backend possibility of deleting multiple records... for now...
    // TODO: This is very bad
    this.loadingPromise = Promise.all(Array.from(this.selected)
      .map(id => this.resourcesService.delete(id)));

    try {
      await this.loadingPromise;
      this.loadData();
    }
    catch (err) {
      this.handleError(err);
    }
  }
  // #endregion

  // #region helpers
  private handleError(err: any) {
    this.errorHandler.handleError(err);
  }
  // #endregion
}
