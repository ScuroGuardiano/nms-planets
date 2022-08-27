import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import { DatatableRowComponent } from './datatable-row/datatable-row.component';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { EditFormCellComponent } from './edit-form-cell/edit-form-cell.component';
import { ColumnHelperService } from './services/column-helper.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatatableComponent,
    DatatableRowComponent,
    EditFormCellComponent
  ],
  providers: [
    ColumnHelperService
  ],
  imports: [
    CommonModule,
    NgxUIModule,
    ReactiveFormsModule
  ],
  exports: [
    DatatableComponent
  ]
})
export class DatatableModule { }
