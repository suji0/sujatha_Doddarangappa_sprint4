import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
 public columnDefs = [
    { field: 'id' },
    { field: 'firstName' },
    { field: 'lastName'},
    {field: 'email'}
];

public rowData = [
    { id: '1', firstName: 'Sujatha', lastName: 'PPP' , email:'mPPP@gmail.com'},
    { id: '2', firstName: 'ABC', lastName: 'PQR' , email:'pq@gmail.com'},
    { id: '3', firstName: 'XYZ', lastName: 'UVW' , email:'uv@gmail.com'}  
];
constructor( 
  private router: Router,
  private appService: AppDataService
  ) {}

public onCreate() {
  this.router.navigate(['createUser']);
}

public edit(rowData){
  this.appService.editUser(rowData.data);
  this.router.navigate(['createUser']);
  console.log(rowData.data);
}

}
