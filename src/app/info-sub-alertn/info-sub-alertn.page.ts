import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-info-sub-alertn',
  templateUrl: './info-sub-alertn.page.html',
  styleUrls: ['./info-sub-alertn.page.scss'],
})
export class InfoSubAlertnPage implements OnInit {
  user: User;
  image_user;
  sub = null;
  subalernts = Array<User>();
  constructor(private userService:UserServiceService,  private route: ActivatedRoute,
    private router: Router, public alertController: AlertController) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      this.user = params as User
      this.image_user = this.user.url_img
      this.getSubAlernts()
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }
  getSubAlernts(){
    this.userService.subAlertnsUser(this.user.employee_number).subscribe(
      (data)=>{
         this.subalernts = data.data as Array<User>
         console.log(this.subalernts)
      },
      (error) => {
        console.log(error);
        this.presentAlert('Error con conexión al servidor');
      }
    );
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

  goToSubAlter(userSub:User){
    this.user = userSub
    this.image_user = userSub.url_img
    this.getSubAlernts()
  }

}
