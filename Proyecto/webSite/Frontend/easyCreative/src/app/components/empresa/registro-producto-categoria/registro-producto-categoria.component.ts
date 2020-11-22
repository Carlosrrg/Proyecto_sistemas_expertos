import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registro-producto-categoria',
  templateUrl: './registro-producto-categoria.component.html',
  styleUrls: ['./registro-producto-categoria.component.css']
})
export class RegistroProductoCategoriaComponent implements OnInit {

  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
