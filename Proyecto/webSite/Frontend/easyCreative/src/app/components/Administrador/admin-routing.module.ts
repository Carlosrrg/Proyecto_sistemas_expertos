import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioAdminComponent } from '../Administrador/estructura-sitio-admin/estructura-sitio-admin.component';
import { VizualizacionGestionEmpresasComponent } from '../Administrador/vizualizacion-gestion-empresas/vizualizacion-gestion-empresas.component';
import { GestionPlanesComponent } from '../Administrador/gestion-planes/gestion-planes.component';
import { PlantillaTemasComponent } from '../Administrador/plantilla-temas/plantilla-temas.component';
import { NuevosAdministradoresComponent } from '../Administrador/nuevos-administradores/nuevos-administradores.component';


const routes: Routes = [
  { path: 'admin/:id', component: EstructuraSitioAdminComponent,
    children:[
      { path: 'visualizacion-planes-empresas', component: VizualizacionGestionEmpresasComponent },
      { path: 'gestion-planes', component: GestionPlanesComponent },
      { path: 'administracion-plantilla-temas', component: PlantillaTemasComponent },
      { path: 'editar-crear-usuarios', component: NuevosAdministradoresComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
