import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { VolkseivsAPIService } from '../volkseivs-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  vksContactForm: FormGroup;

  constructor(private route: Router, private vksAPI: VolkseivsAPIService) { }

  ngOnInit() {
    this.createVKSContactForm();
  }

  submit() {
    console.log("form data is:" + JSON.stringify(this.vksContactForm.value));
    this.saveContactInformation(this.vksContactForm.value);
    this.route.navigateByUrl('/business-info');
  }

  createVKSContactForm() {
    this.vksContactForm = new FormGroup({
      businessOwnerName: new FormControl(''),
      mobileNumber: new FormControl(''),
      secondaryMobileNumber: new FormControl(''),
      landLineNumber: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      qualification: new FormControl(''),
      otherQualifications: new FormControl()
      // secondaryMobileNumber: new FormGroup({
      //   street: new FormControl(''),
      //   city: new FormControl(''),
      //   state: new FormControl(''),
      //   zip: new FormControl('')
      // })
    });
  }

  async  saveContactInformation(contactInformation) {



    await this.vksAPI.postContactInformation(contactInformation)
      .subscribe(res => {
        console.log(res);
        // this.listOfServices = res.response;
        //  loading.dismiss();
      }, err => {
        console.log(err);
        //  loading.dismiss();
      });
  }
}


