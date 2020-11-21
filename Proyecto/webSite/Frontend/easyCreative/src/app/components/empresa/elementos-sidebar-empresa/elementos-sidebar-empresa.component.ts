import { Component, OnInit } from '@angular/core';
import { faTasks, faTools, faMarker, faFileCode, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-elementos-sidebar-empresa',
  templateUrl: './elementos-sidebar-empresa.component.html',
  styleUrls: ['./elementos-sidebar-empresa.component.css']
})
export class ElementosSidebarEmpresaComponent implements OnInit {

  faTasks = faTasks;
  faTools = faTools;
  faMarker = faMarker;
  faFileCode = faFileCode;
  faProductHunt = faProductHunt;
  faFolderPlus = faFolderPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
