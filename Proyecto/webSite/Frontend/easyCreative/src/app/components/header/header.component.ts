import { Component, OnInit } from '@angular/core';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {
  faBars = faBars;
  faBell = faBell;

  collapsed = true; //mostrar el dropdown button
  public isCollapsed = false; //collapsar el sidebar

  constructor() { }

  ngOnInit(): void {
  }

}
