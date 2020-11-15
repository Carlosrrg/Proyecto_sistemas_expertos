import { Component, OnInit } from '@angular/core';
import { faBuilding, faTasks, faTools, faMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  faBuilding = faBuilding;
  faTasks = faTasks;
  faTools = faTools;
  faMarker = faMarker;

  constructor() { }

  ngOnInit(): void {
  }

}
