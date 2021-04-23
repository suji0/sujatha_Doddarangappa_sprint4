import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  public isEdit = false;
  public editTask: any;
  public taskName = 'New task';
  public formGroup: FormGroup;
  constructor(
    public router: Router,
    private appService: AppDataService
  ) {
  }

  ngOnInit() {
    this.editTask = this.appService.getTaskData();
    if (this.editTask == null || this.editTask == '') {
      this.formGroup = new FormGroup(
        {
          projectName: new FormControl(''),
          userName: new FormControl(''),
          details: new FormControl('')
        });
    }
    else {
      this.taskName = 'Update Task';
      this.isEdit = true;
      this.formGroup = new FormGroup(
        {
          projectName: new FormControl(this.editTask['project']),
          userName: new FormControl(this.editTask['assignedToUser']),
          details: new FormControl(this.editTask['details'])
        });
    }
  }

  onSubmit(data) {
    console.log(" test " + this.formGroup.get('projectName').value);
  }

  onCancel() {
    this.router.navigate(['tasks']);
  }

}
