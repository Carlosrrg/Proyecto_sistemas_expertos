import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class headerComponent implements OnInit {
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
