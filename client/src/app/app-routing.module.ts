import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './auth/register/register.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EspaceActivitesComponent } from './espace-activites/espace-activites.component';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';

const routes: Routes = [
  
  { path: '', component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'espace-user', component: EspaceUserComponent },
  { path: 'admin-login', component: AdminComponent },
  { path: 'espace-admin', component: EspaceAdminComponent },
  { path: 'espace-activites', component: EspaceActivitesComponent },
  //{ path: '', redirectTo: 'signin', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
