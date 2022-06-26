import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { IconModule, NgxUIModule } from '@swimlane/ngx-ui';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxUIModule,
    IconModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
