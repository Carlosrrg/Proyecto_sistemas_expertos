import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CompaniesRoutingModule } from './companies-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { EstructuraSitioEmpComponent } from '../empresa/estructura-sitio-emp/estructura-sitio-emp.component';
import { HeaderEmpComponent } from './header-emp/header-emp.component';
import { FooterEmpComponent } from './footer-emp/footer-emp.component';
import { SideBarEmpComponent } from './side-bar-emp/side-bar-emp.component';
import { ElementosSidebarEmpresaComponent } from '../empresa/elementos-sidebar-empresa/elementos-sidebar-empresa.component';
import { EditarPerfilEmpresaComponent } from '../empresa/editar-perfil-empresa/editar-perfil-empresa.component';
import { AdministracionRecursosComponent } from '../empresa/administracion-recursos/administracion-recursos.component';
import { AdministracionPaginasComponent } from '../empresa/administracion-paginas/administracion-paginas.component';
import { ConfiguracionSitiosComponent } from '../empresa/configuracion-sitios/configuracion-sitios.component';
import { RegistroProductoCategoriaComponent } from '../empresa/registro-producto-categoria/registro-producto-categoria.component';
import { AnadirShorcutsComponent } from '../empresa/anadir-shorcuts/anadir-shorcuts.component';
import { AnadirEditarProductosComponent } from '../empresa/anadir-editar-productos/anadir-editar-productos.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstructuraSitioEmpComponent,
    HeaderEmpComponent,
    FooterEmpComponent,
    ElementosSidebarEmpresaComponent,
    EditarPerfilEmpresaComponent,
    AdministracionRecursosComponent,
    AdministracionPaginasComponent,
    ConfiguracionSitiosComponent,
    RegistroProductoCategoriaComponent,
    AnadirShorcutsComponent,
    AnadirEditarProductosComponent,
    SideBarEmpComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    SidebarModule.forRoot()
  ]
})
export class CompaniesModule { }
