import { Component } from "@angular/core";

@Component({ template: '' })
export default abstract class AbstractDatatable<id_t = any> {
  public selected: Set<id_t> = new Set();

  public onSelect(id: id_t, event: Event) {
    if (event.target instanceof HTMLInputElement) {
      const val = event.target.checked;
      val ? this.select(id) : this.unselect(id);
      return;
    }
    console.warn("AbstractDatatable::onSelect called with event not coming from checkbox. Event: %O", event);
  }

  public select(id: id_t) {
    this.selected.add(id);
  }

  public unselect(id: id_t) {
    this.selected.delete(id);
  }

  public isSelected(id: id_t) {
    return this.selected.has(id);
  }

  public onSelectAll(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      const val = event.target.checked;
      val ? this.selectAll() : this.unselectAll();
      return;
    }
    console.warn("AbstractDatatable::onSelectAll called with event not coming from checkbox. Event: %O", event);
  }

  public selectAll() {
    this.selected = new Set(this.getAllIds());
  }
  public unselectAll() {
    this.selected.clear();
  }

  get allSelected() {
    return this.selected.size == this.getAllIds().length;
  }

  public abstract getAllIds(): id_t[];
}
