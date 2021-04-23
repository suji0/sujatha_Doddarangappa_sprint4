import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  constructor(
    public router: Router,
    private appService: AppDataService){}
  public columnDefs = [
    { field: 'id' },
    { field: 'name' },
    { field: 'detail'},
    {field: 'createdOn'}
];

public rowData = [
    { id: '1', name: 'Sujatha', detail: 'PPP' , createdOn:'12/01/2020'},
    { id: '2', name: 'ABC', detail: 'PQR' , createdOn:'01/01/2020'},
    { id: '3', name: 'XYZ', detail: 'UVW' , createdOn:'02/02/2020'}  
];

public edit(rowData){
  this.appService.editProject(rowData.data);
  this.router.navigate(['createProject']);
  console.log(rowData.data);
}
}
