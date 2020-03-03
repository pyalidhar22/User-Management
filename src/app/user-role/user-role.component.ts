import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserCrudService } from '../user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  role: any;
  //testObject: string;
  token: string;
  userRoleForm: FormGroup;
  constructor(private apiservice:UserCrudService,
    private router :Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let obj=JSON.parse(retrievedObject);
    let id=obj.id;
    this.apiservice.getUser(id)
    .subscribe(data =>{
      console.log(data);
      // console.log(data.first_name);
        this.role=data['role'];
        //alert(this.role);
    })
    this.userRoleForm = new FormGroup({
      'userData': new FormGroup({
        'user_role':new FormControl(null,Validators.required)
        //'user_role':new FormControl(null,Validators.required),
        
      })
    })
  }
  onSubmit(){
    console.log(this.userRoleForm);
    this.apiservice.createUserRole(this.userRoleForm.value)
    .subscribe(data =>{
      this.router.navigate(['viewUserRole']);
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
  addUserRole(){
    this.router.navigate(['addUserRole']);
  }
  view_user(){
    this.router.navigate(['viewUser']);
  }
  viewUserRole(){
    this.router.navigate(['viewUserRole']);
  }
  viewAllUser(){
    this.router.navigate(['viewAllUser']);
  }
}
