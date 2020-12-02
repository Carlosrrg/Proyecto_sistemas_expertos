import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioEmpComponent } from '../empresa/estructura-sitio-emp/estructura-sitio-emp.component';

const routes: Routes = [
  { path: 'admin-companies', component: EstructuraSitioEmpComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
