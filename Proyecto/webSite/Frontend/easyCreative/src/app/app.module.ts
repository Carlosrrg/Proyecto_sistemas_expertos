import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminModule } from './components/Administrador/admin.module';
import { CompaniesModule } from './components/empresa/companies.module';
import { UserModule } from './components/usuario/user.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    CompaniesModule,
    UserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
