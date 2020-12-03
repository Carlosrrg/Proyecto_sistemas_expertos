import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioEmpComponent } from '../empresa/estructura-sitio-emp/estructura-sitio-emp.component';
import { EditarPerfilEmpresaComponent } from '../empresa/editar-perfil-empresa/editar-perfil-empresa.component';
import { AdministracionRecursosComponent } from '../empresa/administracion-recursos/administracion-recursos.component';
import { AdministracionPaginasComponent } from '../empresa/administracion-paginas/administracion-paginas.component';
import { ConfiguracionSitiosComponent } from '../empresa/configuracion-sitios/configuracion-sitios.component';
import { RegistroProductoCategoriaComponent } from '../empresa/registro-producto-categoria/registro-producto-categoria.component';
import { AnadirShorcutsComponent } from '../empresa/anadir-shorcuts/anadir-shorcuts.component';

const routes: Routes = [
  { path: 'admin-companies', component: EstructuraSitioEmpComponent,
    children:[
      { path: 'editar-perfil-compania', component: EditarPerfilEmpresaComponent },
      { path: 'administracion-recursos', component: AdministracionRecursosComponent },
      { path: 'administracion-paginas', component: AdministracionPaginasComponent },
      { path: 'configuracion-sitios', component: ConfiguracionSitiosComponent },
      { path: 'registro-productos-categorias', component: RegistroProductoCategoriaComponent },
      { path: 'anadir-shortcuts', component: AnadirShorcutsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
