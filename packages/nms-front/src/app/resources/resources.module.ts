import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { SharedModule } from '../shared/shared.module';
import { ResourceListComponent } from './resource-list/resource-list.component';



@NgModule({
  declarations: [
    ResourcesComponent,
    AddResourceFormComponent,
    ResourceListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ResourcesModule { }
