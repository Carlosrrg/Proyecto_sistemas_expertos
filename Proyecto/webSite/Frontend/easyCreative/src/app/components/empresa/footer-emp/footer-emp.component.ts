import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-emp',
  templateUrl: './footer-emp.component.html',
  styleUrls: ['./footer-emp.component.css']
})
export class FooterEmpComponent implements OnInit {

  faArrowRight = faArrowRight;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
