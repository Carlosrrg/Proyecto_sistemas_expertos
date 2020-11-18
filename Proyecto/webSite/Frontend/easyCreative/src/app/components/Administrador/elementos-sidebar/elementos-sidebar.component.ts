import { Component, OnInit } from '@angular/core';
import { faBuilding, faTasks, faTools, faMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-elementos-sidebar',
  templateUrl: './elementos-sidebar.component.html',
  styleUrls: ['./elementos-sidebar.component.css']
})
export class ElementosSidebarComponent implements OnInit {

  faBuilding = faBuilding;
  faTasks = faTasks;
  faTools = faTools;
  faMarker = faMarker;

  constructor() { }

  ngOnInit(): void {
  }

}
