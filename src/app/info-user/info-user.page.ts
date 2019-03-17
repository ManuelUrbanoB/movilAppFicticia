import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.page.html',
  styleUrls: ['./info-user.page.scss'],
})
export class InfoUserPage implements OnInit {
  user: User;
  image_user;
  sub = null;
  constructor(private userService:UserServiceService,  private route: ActivatedRoute,
    private router: Router) { 
     
  }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      console.log(params);
      this.user = params as User
      this.image_user = this.user.url_img
      console.log(this.user)
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }


}
