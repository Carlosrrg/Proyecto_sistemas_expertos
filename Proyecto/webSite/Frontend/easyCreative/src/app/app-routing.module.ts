import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //modulos de enruptamiento en angular

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


//variable constante instanciada con routes que se usa para el componente a enruptar
const routes: Routes = [
  { path: 'easy-creative', component: LandingPageComponent },
  { path: 'inicio-sesion', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/easy-creative', pathMatch: 'full' },
  { path: '**', redirectTo: '/easy-creative', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //le enviamos el nombre de la constante route que instanciamos arriba
  exports: [RouterModule]
})
export class AppRoutingModule { }