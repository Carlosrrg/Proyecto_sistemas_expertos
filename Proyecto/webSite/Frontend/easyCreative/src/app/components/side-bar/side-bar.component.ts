import { Component, OnInit } from '@angular/core';
import { faBuilding, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  faBuilding = faBuilding;
  faTasks = faTasks;

  constructor() { }

  ngOnInit(): void {
  }

}
