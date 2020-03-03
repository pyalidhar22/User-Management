import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCrudService } from '../../user-crud.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  checkedjobrole1: string;
  checkedjobrole: string;
  token: string;
  employeeselected:string;
  user_roles: string[];
  editForm: FormGroup;
  constructor(private apiservice:UserCrudService,
    private router :Router,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    this.checkedjobrole1='Project Manager';
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let obj=JSON.parse(retrievedObject);
    let check_id=obj.id;
    this.apiservice.getUser(check_id)
    // .subscribe(data => console.log(data), 
    // error => console.log(error));
    .subscribe(data =>{
      console.log(data);
      // console.log(data.first_name);
        this.checkedjobrole=data['role'];
    })
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    let id = this.route.snapshot.params.id;
    this.apiservice.getUser(id)
    // .subscribe(data => console.log(data), 
    // error => console.log(error));
    .subscribe(data =>{
      console.log(data);
     // this.router.navigate(['viewUser', data.id]);
    // this.user_roles=data as string[];
     this.employeeselected=data['role'];
     this.editForm.patchValue({
      userData:{
        userid:data['id'],
        first_name:data['first_name'],
        last_name:data['last_name'],
        email:data['email'],
        password:data['password'],
        //user_role:data['user_role']
      }
     })
    })
    this.editForm = new FormGroup({
      'userData': new FormGroup({
        'userid':new FormControl(),
        'first_name':new FormControl(null,Validators.required),
        'last_name':new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
        'user_role':new FormControl(Validators.required)
        //'user_role':new FormControl(null,Validators.required),
        
      })
    })
    this.apiservice.getUserRole()
    .subscribe(data =>{
      console.log(data);
      //countries : any[]=[];
      this.user_roles=data as string[];
      //this.employeeselected=this.user_roles[0]['user_role_name'];
      console.log(this.user_roles[0]['user_role_name']);
     
    })
  }
  view_user(){
    this.router.navigate(['viewUser']);
  }
  onSubmit() {
    console.log(this.editForm);
    //alert(JSON.stringify(this.editForm.value));
    this.apiservice.editUser(this.editForm.value)
   .subscribe(data => console.log(data), 
    error => console.log(error));
    // .subscribe(data =>{
    //   console.log(data);
      // console.log(data['first_name']);
      //localStorage.setItem('testObject', JSON.stringify(data));
     // this.router.navigate(['viewUser']);
      //this.ngOnInit();
    //})
  }
  addUserRole():void{
    this.router.navigate(['addUserRole']);
  }
  viewUserRole(){
    this.router.navigate(['viewUserRole']);
  }
  viewAllUser(){
    this.router.navigate(['viewAllUser']);
  }

}
