import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppDataService } from '../app.data-service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public editProject: any;
  public projectName = 'New Project';
  public formGroup: FormGroup;
  public isEdit = false;

  constructor(
    public router: Router,
    private appService: AppDataService
  ) {
  }

  ngOnInit() {
    this.editProject = this.appService.getProjectData();
    if (this.editProject == null || this.editProject == '') {
      this.formGroup = new FormGroup(
        {
          name: new FormControl(''),
          details: new FormControl('')
        });
    } else {
      this.isEdit = true;
      this.projectName = this.editProject['name'];
      this.formGroup = new FormGroup(
        {
          name: new FormControl(this.editProject['name']),
          details: new FormControl(this.editProject['detail'])
        });
    }
  }

  onSubmit(data) {
    console.log(" test " + this.formGroup.get('name').value);
  }

  onCancel() {
    this.router.navigate(['projects']);
  }
}
