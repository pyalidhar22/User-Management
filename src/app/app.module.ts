import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewUserComponent } from './view/view-user/view-user.component';
import { EditUserComponent } from './view/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ViewUserRoleComponent } from './user-role/view-user-role/view-user-role.component';
import { EditUserRoleComponent } from './user-role/edit-user-role/edit-user-role.component';
import { ViewAllUserComponent } from './view/view-all-user/view-all-user.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewUserComponent,
    EditUserComponent,
    LoginComponent,
    UserRoleComponent,
    ViewUserRoleComponent,
    EditUserRoleComponent,
    ViewAllUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
