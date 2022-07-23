import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IResource } from 'src/app/api-interfaces';

@Component({
  selector: 'app-resource-row',
  templateUrl: './resource-row.component.html',
  styleUrls: ['./resource-row.component.scss']
})
export class ResourceRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() resource!: IResource;
  @Output() delete = new EventEmitter<IResource>();
  @Output() update = new EventEmitter<IResource>();

  editing = false;
  edited!: IResource;
  valid = false;

  onDelete() {
    this.delete.emit(this.resource);
  }

  edit() {
    this.editing = true;
    this.edited = { ...this.resource };
  }

  onInput(form: HTMLFormElement) {
    console.log("AddResourceFormComponent::onInput");
    this.valid = form.checkValidity();
  }

  onSubmit() {
    this.update.emit(this.edited);
    this.editing = false;
  }

  onDiscard() {
    this.editing = false;
  }
}
