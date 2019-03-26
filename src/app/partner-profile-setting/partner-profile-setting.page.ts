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
  selectService() {
    this.route.navigateByUrl('select-service');
  }
  contactInformation() {
    this.route.navigateByUrl('contact');
  }

  businessInformation() {
    this.route.navigateByUrl('business-info');
  }

  documentsSubmission() {
    this.route.navigateByUrl('select-service');
  }

  manageProfile() {
    this.route.navigateByUrl('portfolio');
  }

  manageService() {
    this.route.navigateByUrl('select-service');
  }
}
