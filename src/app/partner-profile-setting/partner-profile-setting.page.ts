import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partner-profile-setting',
  templateUrl: './partner-profile-setting.page.html',
  styleUrls: ['./partner-profile-setting.page.scss'],
})
export class PartnerProfileSettingPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToHomePage() {
    this.route.navigateByUrl('/home');
  }
}
