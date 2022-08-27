import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DatatableColumn, DatatableColumnType } from '../interfaces';
import { ColumnHelperService } from '../services/column-helper.service';

@Component({
  selector: 'app-edit-form-cell',
  templateUrl: './edit-form-cell.component.html',
  styleUrls: ['./edit-form-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditFormCellComponent implements OnInit {

  constructor(private columnHelper: ColumnHelperService) { }

  ngOnInit(): void {
  }

  DatatableColumnType = DatatableColumnType;

  @Input() column!: DatatableColumn;
  @Input() value!: any;
  @Input() form!: FormGroup;

  get type(): DatatableColumnType {
    return this.columnHelper.getColumnType(this.column, this.value);
  }
}
