import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCrudService } from '../user-crud.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api-response';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  token: any;
  selected_role: any;
  user_roles: string[];
  employee: ApiResponse;
  signupForm: FormGroup;
  constructor(private apiservice:UserCrudService,
  private router :Router) {}
 
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(this.token){
      !this.router.navigate(['register']);
    }
    this.apiservice.getUserRole()
    .subscribe(data =>{
      console.log(data);
      //countries : any[]=[];
      this.user_roles=data as string[];
      //this.employeeselected=this.user_roles[0]['user_role_name'];
      this.selected_role=this.user_roles[0]['user_role_name'];
     //alert(this.selected_role);
    })
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'first_name':new FormControl(null,Validators.required),
        'last_name':new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.minLength(6)]),
        'user_role':new FormControl (null,Validators.required)
      }),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    //this.signupForm.reset();
    this.apiservice.createUser(this.signupForm.value)
    // .subscribe(data => console.log(data), 
    // error => console.log(error));
    // this.gotolist();
    .subscribe(data =>{
      console.log(data);
      // console.log(data.first_name);
      localStorage.setItem('testObject', JSON.stringify(data));
      this.router.navigate(['login']);
    })
  }
  }


