import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DatatableModule } from '../datatable.module';
import { DatatableColumn, DatatableColumnType } from '../interfaces';

@Injectable()
export class ColumnHelperService {

  constructor() { }

  columnsToFormGroup(columns: DatatableColumn[], values: any): FormGroup {
    const group: any = {};

    columns.forEach(column => {
      group[column.key] = this.columnToFormControl(column, values[column.key]);
    });

    return new FormGroup(group);
  }

  columnToFormControl(column: DatatableColumn, value: any): FormControl {
    let validators: ValidatorFn[] = [];

    if (column.required) {
      validators.push(Validators.required)
    }

    if (typeof column.min === 'number') {
      validators.push(Validators.min(column.min));
    }

    if (typeof column.max === 'number') {
      validators.push(Validators.max(column.max));
    }

    return new FormControl({ value: value ?? '', disabled: !column.editable }, validators);
  }

  getColumnType(column: DatatableColumn, value: any): DatatableColumnType {
    if (!column.type || column.type === DatatableColumnType.Infer) {
      switch(typeof value) {
        case 'number':
          return DatatableColumnType.Number;
        case 'boolean':
          return DatatableColumnType.Boolean;
        default:
          return DatatableColumnType.String;
      }
    }
    return column.type;
  }
}
