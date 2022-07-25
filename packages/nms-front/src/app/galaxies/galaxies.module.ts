import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxiesComponent } from './galaxies.component';
import { AddGalaxyFormComponent } from './add-galaxy-form/add-galaxy-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    GalaxiesComponent,
    AddGalaxyFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class GalaxiesModule { }
