import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolkseivsAPIService } from '../volkseivs-api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.page.html',
  styleUrls: ['./select-service.page.scss'],
})
export class SelectServicePage implements OnInit {

  listOfServices = [];

  constructor(private route: Router, private vksAPI: VolkseivsAPIService, public loadingController: LoadingController) { }

  ngOnInit() {
    this.getAllServices();
    // this.listOfServices = ["Automobile Services", "Health & Personal", "Electronics & Appliances", "Photography Services", "Home Maintenance", "Cleaning Services", "Document Services"]
  }
  contuine() {
    this.route.navigateByUrl('/contact')
  }
  goToCatalogManagement() {
    this.route.navigateByUrl('/catalog-management')
  }
  async getAllServices() {


    await this.vksAPI.getAllServices()
      .subscribe(res => {
        console.log(res);
        this.listOfServices = res.response;
        //  loading.dismiss();
      }, err => {
        console.log(err);
        //  loading.dismiss();
      });
  }

}
