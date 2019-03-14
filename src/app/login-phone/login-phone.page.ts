import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.page.html',
  styleUrls: ['./login-phone.page.scss'],
})
export class LoginPhonePage implements OnInit {
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form.value)
  }
  constructor(private route: Router) { }

  ngOnInit() {
  }



  goToLoginWithMobile() {
    this.route.navigateByUrl('/login-phone');
  }
  goToHomePage() {
    this.route.navigateByUrl('/home');
  }
}
