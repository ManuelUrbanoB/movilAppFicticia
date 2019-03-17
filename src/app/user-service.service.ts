import { Injectable,Component } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {UserLogin} from './models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  userLogin:UserLogin;  
  constructor(private http:HttpClient) {
    
   }
   checkLoginUser(email:String, password:String){
    console.log(email);
    console.log(password);
    this.userLogin = new UserLogin();
    this.userLogin.email = email;
    this.userLogin.password = password;
     return this.http.post("http://localhost:8080/webApp/public/api/user/login",this.userLogin);
   }
}
