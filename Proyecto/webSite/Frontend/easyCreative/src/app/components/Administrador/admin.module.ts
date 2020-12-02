import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminRoutingModule } from './admin-routing.module';
import { headerComponent } from '../Administrador/header/header.component';
import { FooterComponent } from '../Administrador/footer/footer.component';
import { SideBarComponent } from '../Administrador/side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { ElementosSidebarComponent } from '../Administrador/elementos-sidebar/elementos-sidebar.component';
import { EstructuraSitioAdminComponent } from '../Administrador/estructura-sitio-admin/estructura-sitio-admin.component';
import { VizualizacionGestionEmpresasComponent } from '../Administrador/vizualizacion-gestion-empresas/vizualizacion-gestion-empresas.component';
import { GestionPlanesComponent } from '../Administrador/gestion-planes/gestion-planes.component';
import { PlantillaTemasComponent } from '../Administrador/plantilla-temas/plantilla-temas.component';
import { NuevosAdministradoresComponent } from '../Administrador/nuevos-administradores/nuevos-administradores.component';

@NgModule({
  declarations: [
    headerComponent,
    FooterComponent,
    SideBarComponent,
    EstructuraSitioAdminComponent,
    ElementosSidebarComponent,
    VizualizacionGestionEmpresasComponent,
    GestionPlanesComponent,
    PlantillaTemasComponent,
    NuevosAdministradoresComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SidebarModule.forRoot()
  ]
})
export class AdminModule { }
