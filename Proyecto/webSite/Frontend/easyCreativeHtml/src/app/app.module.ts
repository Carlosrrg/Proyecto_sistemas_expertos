import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSeccionComponent } from './components/inicio-seccion/inicio-seccion.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSeccionComponent,
    LandingPageComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
