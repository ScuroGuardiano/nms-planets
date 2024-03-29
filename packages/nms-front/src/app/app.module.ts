import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconModule, NgxUIModule } from '@swimlane/ngx-ui';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { httpInterceptorProviders } from './interceptors';
import { LayoutModule } from './layout/layout.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ResourcesModule } from './resources/resources.module';
import { GalaxiesModule } from './galaxies/galaxies.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUIModule,
    IconModule,
    LayoutModule,
    AuthModule,
    DashboardModule,
    ResourcesModule,
    GalaxiesModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
