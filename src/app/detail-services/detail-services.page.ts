import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detail-services',
  templateUrl: './detail-services.page.html',
  styleUrls: ['./detail-services.page.scss'],
})
export class DetailServicesPage implements OnInit {

  listOfServices = [];

  vksDetailServiceForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.createVKSDetailsServicesForm();
  }

  addService() {
    let service = {
      "serviceName": this.vksDetailServiceForm.controls['serviceName'].value,
      "servicePrice": this.vksDetailServiceForm.controls['servicePrice'].value
    }
    this.listOfServices.push(service);
    this.vksDetailServiceForm.reset();
  }

  createVKSDetailsServicesForm() {
    this.vksDetailServiceForm = new FormGroup({
      serviceName: new FormControl(''),
      servicePrice: new FormControl('')
    });
  }
}
