import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.component';
import { AddResourceFormComponent } from './add-resource-form/add-resource-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ResourcesComponent,
    AddResourceFormComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ResourcesModule { }
