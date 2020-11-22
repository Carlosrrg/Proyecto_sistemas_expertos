import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //modulos de enruptamiento en angular

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
  { path: 'admin', component: VizualizacionGestionEmpresasComponent },
  { path: 'admin/VizualizacionGestionEmpresasComponent', component: VizualizacionGestionEmpresasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //le enviamos el nombre de la constante route que instanciamos arriba
  exports: [RouterModule]
})
export class AppRoutingModule { }