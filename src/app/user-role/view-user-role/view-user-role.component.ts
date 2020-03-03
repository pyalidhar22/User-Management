import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCrudService } from '../../user-crud.service';

@Component({
  selector: 'app-view-user-role',
  templateUrl: './view-user-role.component.html',
  styleUrls: ['./view-user-role.component.css']
})
export class ViewUserRoleComponent implements OnInit {

  token: string;
  user_role_details: Object;
  constructor(private apiservice:UserCrudService,
    private router :Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    this.apiservice.getUserRole()
    .subscribe(data =>{
      console.log(data);
      this.user_role_details=data;
      //this.router.navigate(['viewUser']);
    })
  }
  edit_role(id){
   // alert(id);
    this.apiservice.editUserRole(id)
    .subscribe(data =>{
      console.log(data);
      this.user_role_details=data;
      this.router.navigate(['/editUserRole',id]);
    })
  }
  delete_role(id){
    //alert(id);
    this.apiservice.deleteUserRole(id)
    .subscribe(data =>{
      //console.log(data);
      //this.user_role_details=data;
      this.ngOnInit();
      //this.router.navigate(['viewUserRole']);
    })
  }
  edit_user(): void{
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let obj=JSON.parse(retrievedObject);
    let id=obj.id;
    //console.log("button is clicked");
    //alert("the button is clicked");
    //let id = this.route.snapshot.params.id;
    
    this.router.navigate(['/editUser',id]);
  }
  addUserRole():void{
    this.router.navigate(['addUserRole']);
  }
  view_user(){
    this.router.navigate(['viewUser']);
  }
  viewAllUser(){
    this.router.navigate(['viewAllUser']);
  }
}
