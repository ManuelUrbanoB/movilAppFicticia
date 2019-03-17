import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:String;
  password:String;
  
  success:Boolean;
  usuario;
  constructor(public userService:UserServiceService){

  }
  userLogin(){
    this.userService.checkLoginUser(this.email,this.password).subscribe(
      (data)=>{
          this.usuario = data;
          
      },
      (error) => {
        alert("Error con conexión al servidor");
      }
    );
  }
}
