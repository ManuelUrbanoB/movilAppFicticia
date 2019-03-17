import { Injectable,Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {UserLogin} from './models/UserLogin';
import {UserResponse} from './models/UserResponse';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  
  constructor(private http:HttpClient) {
    
   }
   checkLoginUser(email:String, password:String){
    
    let user = new UserLogin(email, password);
     return this.http.post<UserResponse>("http://192.168.1.50:8080/webApp/public/api/user/login",user, httpOptions);
   }
}
