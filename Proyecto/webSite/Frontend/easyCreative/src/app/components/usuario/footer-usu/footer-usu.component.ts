import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-usu',
  templateUrl: './footer-usu.component.html',
  styleUrls: ['./footer-usu.component.css']
})
export class FooterUsuComponent implements OnInit {

  faArrowRight = faArrowRight;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
