import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstructuraSitioUsuComponent } from '../usuario/estructura-sitio-usu/estructura-sitio-usu.component';
import { EditarPerfilComponent } from '../usuario/editar-perfil/editar-perfil.component';
import { MetodoPagoComponent } from '../usuario/metodo-pago/metodo-pago.component';
import { HistorialComprasComponent } from '../usuario/historial-compras/historial-compras.component';
import { CarritoComprasComponent } from '../usuario/carrito-compras/carrito-compras.component';

const routes: Routes = [
  { path: 'usuario/:id', component: EstructuraSitioUsuComponent, 
    children:[
      { path: 'editar-perfil', component: EditarPerfilComponent },
      { path: 'metodo-pago', component: MetodoPagoComponent },
      { path: 'historial-compras', component: HistorialComprasComponent },
      { path: 'carrito', component: CarritoComprasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
