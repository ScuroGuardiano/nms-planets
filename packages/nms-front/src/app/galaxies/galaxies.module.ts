import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxiesComponent } from './galaxies.component';
import { AddGalaxyFormComponent } from './add-galaxy-form/add-galaxy-form.component';
import { SharedModule } from '../shared/shared.module';
import { GalaxyListComponent } from './galaxy-list/galaxy-list.component';
import { DatatableModule } from '../datatable/datatable.module';

@NgModule({
  declarations: [
    GalaxiesComponent,
    AddGalaxyFormComponent,
    GalaxyListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DatatableModule
  ]
})
export class GalaxiesModule { }
