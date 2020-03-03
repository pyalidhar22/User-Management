import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCrudService } from '../../user-crud.service';

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrls: ['./edit-user-role.component.css']
})
export class EditUserRoleComponent implements OnInit {

  token: string;
  edituserRoleForm: FormGroup;
  constructor(private apiservice:UserCrudService,
    private router :Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    this.edituserRoleForm = new FormGroup({
      'userData': new FormGroup({
        'userid':new FormControl(),
        'user_role':new FormControl(null,Validators.required)
        //'user_role':new FormControl(null,Validators.required),
        
      })
    })
    let id = this.route.snapshot.params.id;
    this.apiservice.editUserRole(id)
    // .subscribe(data => console.log(data), 
    // error => console.log(error));
    .subscribe(data =>{
      console.log(data);
     // this.router.navigate(['viewUser', data.id]);
    // this.user_roles=data as string[];
    // this.employeeselected=data['role'];
     this.edituserRoleForm.patchValue({
      userData:{
        userid:data['id'],
        user_role:data['user_role_name'],
      }
     })
    })
  }
  onSubmit(){
    console.log(this.edituserRoleForm);
    this.apiservice.updateUserRole(this.edituserRoleForm.value)
   .subscribe(data => console.log(data), 
    error => console.log(error));
    // .subscribe(data =>{
    //   console.log(data);
      // console.log(data['first_name']);
      //localStorage.setItem('testObject', JSON.stringify(data));
     // this.router.navigate(['viewUserRole']);
    //})
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
  viewUserRole(){
    this.router.navigate(['viewUserRole']);
  }
  viewAllUser(){
    this.router.navigate(['viewAllUser']);
  }
}
