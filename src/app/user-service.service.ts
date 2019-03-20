import { Injectable,Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {UserLogin} from './models/UserLogin';
import {UserResponse} from './models/UserResponse';
import { SubAlertnsResponse } from './models/SubAlternsResponse';
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
     return this.http.post<UserResponse>("http://localhost:8080/webApp/public/api/user/login",user, httpOptions);
   }

   subAlertnsUser(number){
    return this.http.post<SubAlertnsResponse>("http://localhost:8080/webApp/public/api/user/subalert",{"number_boss":number}, httpOptions);
   }
}
