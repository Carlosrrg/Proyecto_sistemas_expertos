import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioAdminComponent } from '../Administrador/estructura-sitio-admin/estructura-sitio-admin.component';

const routes: Routes = [
  { path: 'admin', component: EstructuraSitioAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
