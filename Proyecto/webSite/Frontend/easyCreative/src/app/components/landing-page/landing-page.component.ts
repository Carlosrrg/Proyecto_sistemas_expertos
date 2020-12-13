import { Component, OnInit } from '@angular/core';
import { faTools, faCertificate, faMobileAlt, faRocket, faGem, faTshirt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  faTools = faTools;
  faCertificate = faCertificate;
  faMobileAlt = faMobileAlt;
  faRocket = faRocket;
  faGem = faGem;
  faTshirt = faTshirt;
  faArrowRight = faArrowRight;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  collapsed = true;
  usuarioLocal:boolean = true;
  datosUsuario:any = {};
  idUsuario:string = '';
  tipoUsuario:string = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
    var localStorageUsuarios = window.localStorage;

    if(localStorageUsuarios.getItem('datosUsuarioLocalStorage') == null){
      this.usuarioLocal = false;
    }
    else{
      this.usuarioLocal = true;
      this.datosUsuario = JSON.parse(localStorageUsuarios.getItem('datosUsuarioLocalStorage'));
      this.idUsuario = this.datosUsuario.idUsuario;
      this.tipoUsuario = this.datosUsuario.tipoUsuario;
      //console.log(this.idUsuario, this.tipoUsuario);
    }
  }

  navegarIniciarSesion(){
    this.router.navigate(['/inicio-sesion']);
  }
  
  navegarRegistrarse(){
    this.router.navigate(['/registrarse']);
  }

  paginaInicio(){
    this.router.navigate(['/easy-creative']);
  }

  irCuenta(){
    if (this.tipoUsuario == 'usuario') {
      this.router.navigate(['/usuario',this.idUsuario,'editar-perfil']);
    }
    else if (this.tipoUsuario == 'empresa') {
      this.router.navigate(['/admin-companies',this.idUsuario,'editar-perfil-compania']);
    }
    else if (this.tipoUsuario == 'administrador') {
      this.router.navigate(['/admin',this.idUsuario,'visualizacion-planes-empresas']);
    }
  }

}
