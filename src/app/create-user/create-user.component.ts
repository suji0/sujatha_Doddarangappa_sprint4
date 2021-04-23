import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public editUser: any;
  public userName = 'New User';
  public formGroup: FormGroup;
  public isEdit = false;

  constructor(
    public router: Router,
    private appService: AppDataService
  ) {
  }

  ngOnInit() {
    this.editUser = this.appService.getUserData();
    if (this.editUser == null || this.editUser == '') {
      this.formGroup = new FormGroup(
        {
          firstName: new FormControl(''),
          lastName: new FormControl(''),
          email: new FormControl('')
        });
    } else {
      this.isEdit = true;
      this.userName = this.editUser['firstName'];
      this.formGroup = new FormGroup(
        {
          firstName: new FormControl(this.editUser['firstName']),
          lastName: new FormControl(this.editUser['lastName']),
          email: new FormControl(this.editUser['email'])
        });
    }
  }

  onSubmit(data) {
    console.log(" test " + this.formGroup.get('firstName').value);
  }

  onCancel() {
    this.router.navigate(['users']);
  }
}
