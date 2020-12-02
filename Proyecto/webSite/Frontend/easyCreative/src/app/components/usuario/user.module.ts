import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UserRoutingModule } from './user-routing.module';
import { SidebarModule } from 'ng-sidebar';
import { EstructuraSitioUsuComponent } from '../../components/usuario/estructura-sitio-usu/estructura-sitio-usu.component';
import { HeaderUsuComponent } from './header-usu/header-usu.component';
import { SideBarUsuComponent } from './side-bar-usu/side-bar-usu.component';
import { FooterUsuComponent } from './footer-usu/footer-usu.component';
import { EditarPerfilComponent } from '../usuario/editar-perfil/editar-perfil.component';
import { MetodoPagoComponent } from '../usuario/metodo-pago/metodo-pago.component';
import { HistorialComprasComponent } from '../usuario/historial-compras/historial-compras.component';
import { CarritoComprasComponent } from '../usuario/carrito-compras/carrito-compras.component';
import { ElementosSidebarUsuarioComponent } from '../usuario/elementos-sidebar-usuario/elementos-sidebar-usuario.component';


@NgModule({
  declarations: [
    EstructuraSitioUsuComponent,
    HeaderUsuComponent,
    SideBarUsuComponent,
    EditarPerfilComponent,
    MetodoPagoComponent,
    HistorialComprasComponent,
    CarritoComprasComponent,
    ElementosSidebarUsuarioComponent,
    FooterUsuComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SidebarModule.forRoot()
  ]
})
export class UserModule { }
