import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewUserComponent } from './view/view-user/view-user.component';
import { EditUserComponent } from './view/edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { UserRoleComponent } from './user-role/user-role.component';
import { ViewUserRoleComponent } from './user-role/view-user-role/view-user-role.component';
import { EditUserRoleComponent } from './user-role/edit-user-role/edit-user-role.component';
import { ViewAllUserComponent } from './view/view-all-user/view-all-user.component';




const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'viewUser',component:ViewUserComponent},
  {path:'editUser/:id',component:EditUserComponent},
  {path:'addUserRole',component:UserRoleComponent},
  {path:'viewUserRole',component:ViewUserRoleComponent},
  {path:'editUserRole/:id',component:EditUserRoleComponent},
  {path:'viewAllUser',component:ViewAllUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
