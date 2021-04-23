import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userName = '';
  public password = '';
  constructor(
    private router: Router
  ) {}

  public onSubmit()
  {
    console.log("username", this.userName);
    console.log("password", this.password);
    this.router.navigate(['users']);
  }
}
