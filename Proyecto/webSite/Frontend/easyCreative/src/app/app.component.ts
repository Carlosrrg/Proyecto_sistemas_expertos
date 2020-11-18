import { Component, ViewChild } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sideBar') sideBarComponent:SideBarComponent;

  title = 'easyCreative';

  toggleSidebar(evento){
    console.log('ejecutado desde el app component', evento);
    this.sideBarComponent.ocultarMenu(evento);
  }

}
