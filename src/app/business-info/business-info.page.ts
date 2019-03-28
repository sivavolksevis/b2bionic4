import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VolkseivsAPIService } from '../volkseivs-api.service';

// interface workHours {
//   id: number;
//   name: string;
//   checked?: boolean;
// }

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.page.html',
  styleUrls: ['./business-info.page.scss'],
})
export class BusinessInfoPage implements OnInit {

  workingHours = [];
  WeeklyHoliday = [];
  Languages = [];
  vksBusinessForm: FormGroup;
  selectedWorkingHours = [];
  selectedWeekleyHolidays = [];
  selectedLanuages = [];

  constructor(private vksAPI: VolkseivsAPIService) { }

  ngOnInit() {
    this.workingHours = [{ "timeSlotId": 1, "checked": false, "timeSlotName": "5AM-7AM" }, { "timeSlotId": 2, "checked": false, "timeSlotName": "7AM-9AM" }, { "timeSlotId": 3, "checked": false, "timeSlotName": "9AM-11AM" }, { "timeSlotId": 4, "checked": false, "timeSlotName": "11AM-1PM" }, { "timeSlotId": 5, "checked": false, "timeSlotName": "1PM-3PM" }, { "timeSlotId": 6, "checked": false, "timeSlotName": "3PM-5PM" }, { "itimeSlotIdd": 7, "checked": false, "timeSlotName": "5PM-7PM" }, { "timeSlotId": 8, "checked": false, "timeSlotName": "7PM-9PM" }];
    this.WeeklyHoliday = [{ "weekID": 1, "weekName": "Sunday", "checked": false }, { "weekID": 2, "weekName": "Monday", "checked": false }, { "weekID": 3, "weekName": "Tuesday", "checked": false }, { "weekID": 4, "weekName": "Wednesday", "checked": false }, { "weekID": 5, "weekName": "Thursday", "checked": false }, { "weekID": 6, "weekName": "Friday", "checked": false }, { "weekID": 7, "weekName": "Saturday", "checked": false }];
    this.Languages = [{ "langID": 1, "langName": "Engilsh", "checked": false }, { "langID": 2, "langName": "Swahili", "checked": false }, { "langID": 3, "langName": "Kikuyu", "checked": false }, { "langID": 4, "langName": "Dholuo", "checked": false }, { "langID": 5, "langName": "Luhya", "checked": false }];

    this.createVKSBusinessForm();
  }

  createVKSBusinessForm() {
    this.vksBusinessForm = new FormGroup({
      businessName: new FormControl(''),
      businessType: new FormControl(''),
      businessDescription: new FormControl(''),
      businessStartYear: new FormControl(''),
      teamSize: new FormControl(''),
      timeSlots: new FormControl(''),
      weekHolidays: new FormControl(''),
      langugaes: new FormControl()
    });
  }

  saveBusinssInformation() {
    let requestObject = {
      "memberId": 682015,
      "businessDetails": {
        "businessName": this.vksBusinessForm.controls['businessName'].value,
        "businessType": this.vksBusinessForm.controls['businessType'].value,
        "businessDescription": this.vksBusinessForm.controls['businessDescription'].value,
        "timeSlots": this.selectedWorkingHours,
        "weekHolidays": this.selectedWeekleyHolidays,
        "langugaes": this.selectedLanuages,
        "buisnessAddress": "Plot-no:3, Gayathri Nagar, Borabanda",
        "teamSize": this.vksBusinessForm.controls['teamSize'].value,
        "businessStartYear": this.vksBusinessForm.controls['businessStartYear'].value
      }

    }

    console.log("form data:" + JSON.stringify(requestObject));

    this.vksAPI.postbusinessInformation(requestObject)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      });


  }

  changeRadioStatus(checkbox, index) {
    if (this.vksBusinessForm.controls['timeSlots'].value == true) {
      this.selectedWorkingHours.push(checkbox);
    } else {
      const value = this.selectedWorkingHours.indexOf(checkbox);
      if (value > -1) {
        this.selectedWorkingHours.splice(value, 1);
      }
    }
    console.log(this.vksBusinessForm.controls['timeSlots'].value);
    console.log("checkbox is:" + JSON.stringify(checkbox), "index is:" + index);
  }

  // changeWeeklyStatus(){}

  changeWeeklyStatus(checkbox, index) {
    if (this.vksBusinessForm.controls['weekHolidays'].value == true) {
      this.selectedWeekleyHolidays.push(checkbox);
    } else {
      const value = this.selectedWeekleyHolidays.indexOf(checkbox);
      if (value > -1) {
        this.selectedWeekleyHolidays.splice(value, 1);
      }
    }
    console.log(this.vksBusinessForm.controls['weekHolidays'].value);
    console.log("checkbox is:" + JSON.stringify(checkbox), "index is:" + index);
  }




  changeLangugaesStatus(checkbox, index) {
    if (this.vksBusinessForm.controls['langugaes'].value == true) {
      this.selectedLanuages.push(checkbox);
    } else {
      const value = this.selectedLanuages.indexOf(checkbox);
      if (value > -1) {
        this.selectedLanuages.splice(value, 1);
      }
    }
    console.log(this.vksBusinessForm.controls['langugaes'].value);
    console.log("checkbox is:" + JSON.stringify(checkbox), "index is:" + index);
  }

}
