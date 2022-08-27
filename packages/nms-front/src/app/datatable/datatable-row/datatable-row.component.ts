import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ColumnEditUpdateEvent, DatatableColumn } from '../interfaces';
import { ColumnHelperService } from '../services/column-helper.service';

@Component({
  selector: 'app-datatable-row',
  templateUrl: './datatable-row.component.html',
  styleUrls: ['./datatable-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableRowComponent implements OnInit {

  constructor(private columnHelper: ColumnHelperService) { }

  ngOnInit(): void {
  }

  form!: FormGroup;
  editing = false;

  get valid() {
    return this.form.valid;
  }

  @Input() record?: any;
  @Input() columns!: DatatableColumn[];
  @Input() editable?: boolean;
  @Input() deletable?: boolean;
  @Input() selectable?: boolean;
  @Input() isSelected?: boolean;

  @Output() delete = new EventEmitter<any>();
  @Output() update = new EventEmitter<ColumnEditUpdateEvent>();
  @Output() select = new EventEmitter<boolean>();

  get actionsColumnVisible() {
    return this.editable || this.deletable;
  }

  edit() {
    if (!this.editable) {
      return;
    }
    this.editing = true;
    this.form = this.columnHelper.columnsToFormGroup(this.columns, this.record);
  }

  onDelete() {
    this.delete.emit(this.record);
  }

  onSelect(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    if (event.target.checked === this.isSelected) {
      // ngx-ui checkbox fires event 'change' every time when value changes, even if I change it from code.
      // so when isSelected is changed it fires another event. To prevent that I fire event select only when value changed.
      return;
    }
    this.select.emit(event.target.checked);
  }

  onEditSubmit() {
    console.log(this.form.value);
    this.update.emit(new ColumnEditUpdateEvent(this.record, this.form.value));
    this.editing = false;
  }

  onDiscard() {
    this.editing = false;
  }
}
