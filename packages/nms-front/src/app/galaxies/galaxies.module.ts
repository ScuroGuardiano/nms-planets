import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalaxiesComponent } from './galaxies.component';
import { AddGalaxyFormComponent } from './add-galaxy-form/add-galaxy-form.component';

@NgModule({
  declarations: [
    GalaxiesComponent,
    AddGalaxyFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GalaxiesModule { }
