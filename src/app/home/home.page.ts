import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserResponse } from '../models/UserResponse';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:String;
  password:String;
  message:String;
  success:Boolean;
  usuario: UserResponse;
  constructor(private userService:UserServiceService, private router:Router,public alertController: AlertController){
       
  }

  async presentAlert(msg:String) {
    const alert = await this.alertController.create({
      header: 'Error en inicio de sesión',
      subHeader: 'Por favor intentelo de nuevo',
      message: ''+ msg,
      buttons: ['OK']
    });

    await alert.present();
  }


  userLogin(){
    this.userService.checkLoginUser(this.email,this.password).subscribe(
      (data)=>{
          this.usuario = data;
          if(this.usuario.success == true){
            console.log(this.usuario.data);
            this.router.navigate(['/info-user'], {queryParams:  this.usuario.data});
          }else{
            this.presentAlert('El usuario o contraseña son incorrectos');
          }
      },
      (error) => {
        this.presentAlert('Error con conexión al servidor');
      }
    );
  }
}

