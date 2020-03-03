import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCrudService } from '../user-crud.service';
import { Router } from '@angular/router';
import { ApiResponse } from '../model/api-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: any;
  LoginForm: FormGroup;
  constructor(private apiservice:UserCrudService,
    private router :Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      'userData': new FormGroup({
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password':new FormControl(null,[Validators.required,Validators.minLength(6)])
      }),
    });
  }
  onSubmit() {
    console.log(this.LoginForm);
     this.apiservice.loginUser(this.LoginForm.value)
    // // .subscribe(data => console.log(data), 
    // // error => console.log(error));
    // // this.gotolist();
    .subscribe(data =>{
      console.log(data);
      this.message=data['message'];
      console.log(data['message']);
      if(data['token']){
        window.localStorage.setItem('token', data['token']);
        console.log( data['token']);
        localStorage.setItem('testObject', JSON.stringify(data));
        this.router.navigate(['viewUser']);
      }
      
    })
  }
  register(){
    this.router.navigate(['/register']);
  }

}
