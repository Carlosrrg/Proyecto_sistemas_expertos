import { Component, OnInit } from '@angular/core';
import { faMarker, faCreditCard, faShoppingBag } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-elementos-sidebar-usuario',
  templateUrl: './elementos-sidebar-usuario.component.html',
  styleUrls: ['./elementos-sidebar-usuario.component.css']
})
export class ElementosSidebarUsuarioComponent implements OnInit {

  faMarker = faMarker;
  faCreditCard = faCreditCard;
  faShoppingBag = faShoppingBag;


  constructor() { }

  ngOnInit(): void {
    
  }

}
