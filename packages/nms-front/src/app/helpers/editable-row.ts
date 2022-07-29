import { Component, EventEmitter, Injectable, Input, Output } from "@angular/core";

@Component({ template: '' })
export default abstract class EditableRow<T> {
  @Input() public data!: T;
  @Output() public delete = new EventEmitter<T>();
  @Output() public update = new EventEmitter<T>();

  public editing = false;
  public edited!: T;
  public valid = false;

  onDelete() {
    this.delete.emit(this.data);
  }

  edit() {
    this.editing = true;
    this.edited = { ...this.data };
  }

  onInput(form: HTMLFormElement) {
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
