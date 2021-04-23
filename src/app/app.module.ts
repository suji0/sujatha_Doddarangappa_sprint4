import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppDataService } from './app.data-service';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserListComponent,
    ProjectListComponent,
    TaskListComponent,
    CreateUserComponent,
    CreateTaskComponent,
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    AgGridModule.withComponents([]
      ),
    AngularFontAwesomeModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: AppDataService, useClass: AppService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
