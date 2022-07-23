import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalaxiesComponent } from './galaxies/galaxies.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent, canActivate: [ AuthGuard ] },
  { path: "", pathMatch: "full", component: DashboardComponent, canActivate: [ AuthGuard ] },
  { path: "resources", component: ResourcesComponent, canActivate: [ AuthGuard ] },
  { path: "galaxies", component: GalaxiesComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
