import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent{
 
  constructor(
    public router: Router,
    private appService: AppDataService){}
  public columnDefs = [
    { field: 'id' },
    { field: 'project' },
    { field: 'details'},
    {field: 'assignedToUser'},
    {field: 'status'},
    {field: 'createdOn'}
];

public rowData = [
    { id: '1', project: 'ABC', details: 'ABC' , assignedToUser:'Sujatha', status:'New', createdOn:'21/01/2020'},
    { id: '2', project: 'ABC', details: 'BBB' , assignedToUser:'CCC', status:'Closed', createdOn:'21/05/2020'},
    { id: '3', project: 'ABC', details: 'CCC' , assignedToUser:'YYY', status:'Inprogress', createdOn:'21/10/2020'}
]

public edit(rowData){
  console.log(rowData.data);
  this.appService.editTask(rowData.data);
  this.router.navigate(['createTask']);
}
}
