import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TrackByFunction } from '@angular/core';
import { ColumnEditUpdateEvent, DataRecordWrapper, DatatableColumn, DatatableColumnType } from './interfaces';

const defaultDatatableColumn: Partial<DatatableColumn> = {
  editable: true,
  type: DatatableColumnType.Infer
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // For checking all selected records :3
  private selectedCount = 0;

  private _data?: Array<DataRecordWrapper> | undefined;
  @Input()
  public get data(): Array<any> | undefined {
    return this._data?.map(r => r.recordData);
  }
  public set data(value: Array<any> | undefined) {
    this.selectedCount = 0;
    this._data = value?.map(r => ({ recordData: r, selected: false }));
    if (!this._columns) {
      this.inferInternalColumns();
    }
  }

  public get dataWithMetadata() {
    return this._data;
  }

  public internalColumns!: Array<DatatableColumn>;
  private _columns?: Array<DatatableColumn>;
  /**
   * Tells datatable
   * - What columns should be displayed
   * - In which order they should be displayed
   * - What is header caption for each column.
   */
  @Input()
  get columns() {
    return this._columns;
  }
  set columns(v: Array<DatatableColumn> | undefined) {
    this._columns = v?.map(column => ({ ...defaultDatatableColumn, ...column }));
    if (this._columns) {
      this.internalColumns = this._columns;
    } else {
      this.inferInternalColumns();
    }
  }

  private _deletable?: boolean;
  @Input()
  get deletable() {
    return this._deletable;
  }
  set deletable(value: any) {
    this._deletable = coerceBooleanProperty(value)
  }

  private _editable?: boolean;
  @Input()
  get editable() {
    return this._editable;
  }
  set editable(value: any) {
    this._editable = coerceBooleanProperty(value)
  }

  private _selectable?: boolean;
  @Input()
  get selectable() {
    return this._selectable;
  }
  set selectable(value: any) {
    this._selectable = coerceBooleanProperty(value)
  }

  @Input() trackBy?: TrackByFunction<any>;

  @Output() delete = new EventEmitter<any>();
  @Output() select = new EventEmitter<any[]>();
  @Output() update = new EventEmitter<ColumnEditUpdateEvent>();

  get columnKeys() {
    if (this.columns) {
      return this.columns.map(c => c.key);
    }

    if (!this.data || this.data.length === 0) {
      return [];
    }
    return Object.keys(this.data[0]).filter(key => this.data![0].hasOwnProperty(key));
  }

  get columnHeaders() {
    if (this.columns) {
      return this.columns.map(c => c.label ?? c.key);
    }

    return this.columnKeys;
  }

  get actionsColumnVisible() {
    return this.deletable;
  }

  get allSelected() {
    return this.selectedCount === this.data?.length;
  }

  onRowSelect(record: DataRecordWrapper, selected: boolean) {
    if (record.selected === selected) {
      return; // Ignore double event here.
    }

    record.selected = selected;
    this.selectedCount += selected ? 1 : -1;
    this.select.emit(this._data?.filter(r => r.selected).map(r => r.recordData));
  }

  onSelectAll(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }
    if (event.target.checked === this.allSelected) {
      // ngx-ui checkbox fires event 'change' every time when value changes, even if I change it from code.
      // so when isSelected is changed it fires another event. To prevent that I fire event select only when value changed.
      return;
    }

    if (event.target.checked) {
      this._data?.forEach(r => r.selected = true);
      this.selectedCount = this.dataWithMetadata?.length ?? 0;
      this.select.emit([...this.data ?? []]);
    } else {
      this._data?.forEach(r => r.selected = false);
      this.selectedCount = 0;
      this.select.emit([]);
    }
  }

  private inferInternalColumns() {
    this.internalColumns = this.columnKeys.map(key => ({ ...defaultDatatableColumn, key }));
  }
}
