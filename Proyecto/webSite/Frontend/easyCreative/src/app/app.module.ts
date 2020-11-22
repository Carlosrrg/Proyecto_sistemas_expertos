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
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ElementosSidebarComponent } from './components/Administrador/elementos-sidebar/elementos-sidebar.component';
import { EditarPerfilComponent } from './components/usuario/editar-perfil/editar-perfil.component';
import { MetodoPagoComponent } from './components/usuario/metodo-pago/metodo-pago.component';
import { HistorialComprasComponent } from './components/usuario/historial-compras/historial-compras.component';
import { CarritoComprasComponent } from './components/usuario/carrito-compras/carrito-compras.component';
import { ElementosSidebarUsuarioComponent } from './components/usuario/elementos-sidebar-usuario/elementos-sidebar-usuario.component';
import { AdministracionRecursosComponent } from './components/empresa/administracion-recursos/administracion-recursos.component';
import { AdministracionPaginasComponent } from './components/empresa/administracion-paginas/administracion-paginas.component';
import { ConfiguracionSitiosComponent } from './components/empresa/configuracion-sitios/configuracion-sitios.component';
import { RegistroProductoCategoriaComponent } from './components/empresa/registro-producto-categoria/registro-producto-categoria.component';
import { AnadirShorcutsComponent } from './components/empresa/anadir-shorcuts/anadir-shorcuts.component';
import { EditarPerfilEmpresaComponent } from './components/empresa/editar-perfil-empresa/editar-perfil-empresa.component';
import { ElementosSidebarEmpresaComponent } from './components/empresa/elementos-sidebar-empresa/elementos-sidebar-empresa.component';
import { AnadirEditarProductosComponent } from './components/empresa/anadir-editar-productos/anadir-editar-productos.component';


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
    NuevosAdministradoresComponent,
    SideBarComponent,
    ElementosSidebarComponent,
    EditarPerfilComponent,
    MetodoPagoComponent,
    HistorialComprasComponent,
    CarritoComprasComponent,
    ElementosSidebarUsuarioComponent,
    AdministracionRecursosComponent,
    AdministracionPaginasComponent,
    ConfiguracionSitiosComponent,
    RegistroProductoCategoriaComponent,
    AnadirShorcutsComponent,
    EditarPerfilEmpresaComponent,
    ElementosSidebarEmpresaComponent,
    AnadirEditarProductosComponent
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
