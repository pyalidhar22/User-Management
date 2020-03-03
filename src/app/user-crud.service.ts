import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { ApiResponse } from './model/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
 
  private baseUrl = 'http://localhost/AngularLoginRegister';
  constructor(private http:HttpClient) { }
  loginUser(user:User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + '/get_login_user.php',user)
  }
  createUser(user:User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + '/insert.php',user)
  }
  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/getUser.php?id=${id}`);
  }
  editUser(user:User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + '/update.php',user)
  }
  getUserRole():Observable<Object> {
    return this.http.get(`${this.baseUrl}/getUserRole.php`);
  }
  createUserRole(user:User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + '/insert_user_role.php',user)
  }
  editUserRole(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/get_user_role_details.php?id=${id}`);
  }
  deleteUserRole(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/delete_role.php?id=${id}`);
  }
  updateUserRole(user:User):Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + '/update_user_role.php',user)
  }
  getAllUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/get_all_user.php?id=${id}`);
  }
  deleteUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/delete_user.php?id=${id}`);
  }
}
