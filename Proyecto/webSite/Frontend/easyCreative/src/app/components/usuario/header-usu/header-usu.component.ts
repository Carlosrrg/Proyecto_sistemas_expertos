import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-usu',
  templateUrl: './header-usu.component.html',
  styleUrls: ['./header-usu.component.css']
})
export class HeaderUsuComponent implements OnInit {
  @Output() onSideBar = new EventEmitter();

  faBars = faBars;
  faBell = faBell;
  faShoppingCart = faShoppingCart;

  opened = true;

  collapsed = true; //mostrar el dropdown button
  public isCollapsed = false; //collapsar el sidebar

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.opened = !this.opened;
    this.onSideBar.emit(this.opened);
  }

}
