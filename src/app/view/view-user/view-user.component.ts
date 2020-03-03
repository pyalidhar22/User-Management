import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserCrudService } from '../../user-crud.service';
@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  checkedRole: string;
  token: string;
  role: any;
  email: any;
  last_name: any;
  first_name: any;
  constructor(private router :Router,
    private route: ActivatedRoute,
    private apiservice:UserCrudService,) { }
    
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

  ngOnInit(): void {
    this.checkedRole='Project Manager';
    this.token=localStorage.getItem('token');
    if(!this.token){
      this.router.navigate(['']);
    }
    var retrievedObject = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let obj=JSON.parse(retrievedObject);
    let id=obj.id;
    this.api_call(id);
    //this.first_name=obj.first_name;
   
  }
    api_call(id){
    this.apiservice.getUser(id)
    // .subscribe(data => console.log(data), 
    // error => console.log(error));
    .subscribe(data =>{
      console.log(data);
      // console.log(data.first_name);
      this.first_name=data['first_name'];
      this.last_name=data['last_name'];
      this.email=data['email'];
      if(data['role']){
        this.role=data['role'];
      }else{
        this.role='-NA-';
      }
    })
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
  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('retrievedObject');
    this.router.navigate(['']);
  }
  
  
}
