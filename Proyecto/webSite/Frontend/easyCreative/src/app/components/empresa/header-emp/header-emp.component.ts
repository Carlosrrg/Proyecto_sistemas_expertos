import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars, faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-emp',
  templateUrl: './header-emp.component.html',
  styleUrls: ['./header-emp.component.css']
})
export class HeaderEmpComponent implements OnInit {
  @Output() onSideBar = new EventEmitter();

  faBars = faBars;
  faBell = faBell;
  faShoppingCart = faShoppingCart;

  opened = true;

  collapsed = true; //mostrar el dropdown button
  public isCollapsed = false; //collapsar el sidebar

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.opened = !this.opened;
    this.onSideBar.emit(this.opened);
  }

  cerrarSession(){
    localStorage.removeItem('datosUsuarioLocalStorage');
    this.router.navigate(['/easy-creative']);
  }

}
