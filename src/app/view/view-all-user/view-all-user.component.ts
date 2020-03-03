import { Component, OnInit } from '@angular/core';
import { UserCrudService } from '../../user-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  token: string;
  sel_id: any;
  all_user_details: Object;
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
    this.sel_id=obj.id;
    this.apiservice.getAllUser(id)
    .subscribe(data =>{
      console.log(data);
      this.all_user_details=data;
    })
  }
  edit_user_selected(id){
    this.router.navigate(['/editUser',id]);
  }
  delete_user(id1){
    //alert(id1);
    this.apiservice.deleteUser(id1).subscribe(data =>{
      this.ngOnInit();
    })
  }
  addUserRole():void{
    this.router.navigate(['addUserRole']);
  }
  viewUserRole(){
    this.router.navigate(['viewUserRole']);
  }
  view_user(){
    this.router.navigate(['viewUser']);
  }
  edit_user(){
    this.router.navigate(['/editUser', this.sel_id]);
  }
  
}
