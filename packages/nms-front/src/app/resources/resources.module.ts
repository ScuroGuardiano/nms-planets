import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { SharedModule } from '../shared/shared.module';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceRowComponent } from './resource-list/resource-row/resource-row.component';
import { DatatableModule } from '../datatable/datatable.module';

@NgModule({
  declarations: [
    ResourcesComponent,
    AddResourceFormComponent,
    ResourceListComponent,
    ResourceRowComponent
  ],
  imports: [
    SharedModule,
    DatatableModule
  ]
})
export class ResourcesModule { }
