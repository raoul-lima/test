import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { EspaceUserComponent } from './espace-user/espace-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorProviders } from './Intercepteur/interceptor';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EspaceActivitesComponent } from './espace-activites/espace-activites.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    EspaceUserComponent,
    EspaceAdminComponent,
    SigninComponent,
    EspaceActivitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
