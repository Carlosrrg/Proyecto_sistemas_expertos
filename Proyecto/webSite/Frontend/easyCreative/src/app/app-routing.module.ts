import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //modulos de enruptamiento en angular

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
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


//variable constante instanciada con routes que se usa para el componente a enruptar
const routes: Routes = [
  { path: 'easy-creative', component: LandingPageComponent },
  { path: 'inicio-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/easy-creative', pathMatch: 'full' }
];

/*
{ path: 'admin/vizualizacion-gestion-empresas', component: VizualizacionGestionEmpresasComponent } ,
  { path: 'admin/gestion-planes', component: GestionPlanesComponent },
  { path: 'admin/administracion-plantilla-temas', component: PlantillaTemasComponent },
  { path: 'admin/editar-crear-usuarios-administradores', component: NuevosAdministradoresComponent },
  { path: 'usuario/perfil-usuario', component: EditarPerfilComponent },
  { path: 'usuario/metodo-pago', component: MetodoPagoComponent },
  { path: 'usuario/historial-compras', component: HistorialComprasComponent },
  { path: 'usuario/carrito-compras', component: CarritoComprasComponent },
  { path: 'admin-companies/id-empresa/editar-perfil-empresa', component: EditarPerfilEmpresaComponent },
  { path: 'admin-companies/id-empresa/administracion-recursos', component: AdministracionRecursosComponent },
  { path: 'admin-companies/id-empresa/administracion-paginas', component: AdministracionPaginasComponent },
  { path: 'admin-companies/id-empresa/configuracion-sitios', component: ConfiguracionSitiosComponent },
  { path: 'admin-companies/id-empresa/registro-productos-categorias', component: RegistroProductoCategoriaComponent },
  { path: 'admin-companies/id-empresa/registro-productos', component: AnadirEditarProductosComponent },
  { path: 'admin-companies/id-empresa/anadir-shortcuts', component: AnadirShorcutsComponent }

*/

@NgModule({
  imports: [RouterModule.forRoot(routes)], //le enviamos el nombre de la constante route que instanciamos arriba
  exports: [RouterModule]
})
export class AppRoutingModule { }