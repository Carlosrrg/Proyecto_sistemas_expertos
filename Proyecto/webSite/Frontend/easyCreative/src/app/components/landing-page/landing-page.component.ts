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

  constructor(private router:Router) { }

  ngOnInit(): void {
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

}
