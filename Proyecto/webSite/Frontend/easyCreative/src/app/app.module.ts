import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { headerComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarModule } from 'ng-sidebar';
import { VizualizacionGestionEmpresasComponent } from './components/Administrador/vizualizacion-gestion-empresas/vizualizacion-gestion-empresas.component';
import { GestionPlanesComponent } from './components/Administrador/gestion-planes/gestion-planes.component';
import { PlantillaTemasComponent } from './components/Administrador/plantilla-temas/plantilla-temas.component';
import { NuevosAdministradoresComponent } from './components/Administrador/nuevos-administradores/nuevos-administradores.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    headerComponent,
    FooterComponent,
    VizualizacionGestionEmpresasComponent,
    GestionPlanesComponent,
    PlantillaTemasComponent,
    NuevosAdministradoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
