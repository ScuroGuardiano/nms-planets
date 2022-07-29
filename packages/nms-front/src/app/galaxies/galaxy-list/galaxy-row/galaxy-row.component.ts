import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IGalaxy } from 'src/app/api-interfaces';

@Component({
  selector: 'app-galaxy-row',
  templateUrl: './galaxy-row.component.html',
  styleUrls: ['./galaxy-row.component.scss']
})
export class GalaxyRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() galaxy!: IGalaxy;
  @Output() delete = new EventEmitter<IGalaxy>();
  @Output() update = new EventEmitter<IGalaxy>();

  editing = false;
  edited!: IGalaxy;
  valid = false;

  onDelete() {
    this.delete.emit(this.galaxy);
  }

  edit() {
    this.editing = true;
    this.edited = { ...this.galaxy };
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
