import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
  };


  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToLoginWithMobile() {
    this.route.navigateByUrl('/login-phone');
  }
  goToLoginWithEmail() {
    this.route.navigateByUrl('/login-email');
  }

}
