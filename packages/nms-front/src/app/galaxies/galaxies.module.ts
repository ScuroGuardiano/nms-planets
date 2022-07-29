import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxiesComponent } from './galaxies.component';
import { AddGalaxyFormComponent } from './add-galaxy-form/add-galaxy-form.component';
import { SharedModule } from '../shared/shared.module';
import { GalaxyListComponent } from './galaxy-list/galaxy-list.component';
import { GalaxyRowComponent } from './galaxy-list/galaxy-row/galaxy-row.component';

@NgModule({
  declarations: [
    GalaxiesComponent,
    AddGalaxyFormComponent,
    GalaxyListComponent,
    GalaxyRowComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GalaxiesModule { }
