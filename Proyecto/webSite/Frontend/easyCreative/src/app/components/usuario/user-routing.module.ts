import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioUsuComponent } from '../usuario/estructura-sitio-usu/estructura-sitio-usu.component';

const routes: Routes = [
  { path: 'usuario', component: EstructuraSitioUsuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
