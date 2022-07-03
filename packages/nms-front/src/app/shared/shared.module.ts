import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { IconModule, NgxUIModule } from '@swimlane/ngx-ui';
import { LoadingOverlayWrapperComponent } from './components/loading-overlay-wrapper/loading-overlay-wrapper.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoadingOverlayComponent,
    LoadingOverlayWrapperComponent
  ],
  imports: [
    CommonModule,
    NgxUIModule,
    IconModule,
    FormsModule
  ],
  exports: [
    // Modules
    CommonModule,
    NgxUIModule,
    IconModule,
    FormsModule,
    // Components
    LoadingOverlayComponent,
    LoadingOverlayWrapperComponent
  ]
})
export class SharedModule { }
