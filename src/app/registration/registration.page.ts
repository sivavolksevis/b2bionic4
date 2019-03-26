import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sim } from '@ionic-native/sim/ngx';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  registrationForm: FormGroup;
  userNumbers = new Array<any>();
  userNumbers1 = new Array<any>();
  cardsData: any;

  options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };



  // registrationForm = new FormGroup({
  //   mobileNumber: new FormControl()
  // });

  constructor(private spinnerDialog: SpinnerDialog, private route: Router, private sim: Sim, public alertController: AlertController, private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    this.createForm();
    this.getUserCurrentLocation();

  }

  createForm() {
    this.registrationForm = new FormGroup({
      mobileNumber: new FormControl("", Validators.compose([Validators.minLength(12), Validators.maxLength(12)])
      ),
      currentCity: new FormControl(""),

    });
  }




  async getDeviceInformation() {

    let simPermission = await this.sim.requestReadPermission();

    if (simPermission == "OK") {
      let hasReadPermission = await this.sim.hasReadPermission();

      if (hasReadPermission == true) {
        this.sim.getSimInfo().then(
          (info) => {
            if (info.cards) {
              info.cards.forEach(element => {
                if (element.phoneNumber) {
                  this.userNumbers.push(element.phoneNumber);
                  //  this.userNumbers = ["+254123456789"];
                  this.registrationForm.controls["mobileNumber"].setValue(this.userNumbers[0]);
                  this.spinnerDialog.hide();
                }
              });
              this.cardsData = info.cards;
            }
            console.log('Sim info: ', info)
          },
          (err) => {
            console.log('Unable to get sim info: ', err)
          }
        );
      } else {
        console.log("Permission is not given by user");
      }

    } else {
      this.registrationForm.controls["mobileNumber"].setValue("");
    }





    // this.sim.hasReadPermission().then(
    //   (info) => console.log('Has permission: ', info)
    // );

    // this.sim.requestReadPermission().then(
    //   () => console.log('Permission granted'),
    //   () => console.log('Permission denied')
    // );
  }

  getUserCurrentLocation() {
    this.spinnerDialog.show();
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log("user current location:" + resp.coords.latitude, resp.coords.longitude);
      this.getUserFullAddress(resp.coords.latitude, resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getUserFullAddress(longitude, latitude) {
    this.nativeGeocoder.reverseGeocode(longitude, latitude, this.options)
      .then((result: NativeGeocoderReverseResult[]) => {
        console.log(JSON.stringify(result[0]));
        let location = result[0];
        if (location.locality) {
          this.registrationForm.controls["currentCity"].setValue(location.locality);
          this.getDeviceInformation();
        }
      })
      .catch((error: any) => console.log(error));

    this.nativeGeocoder.forwardGeocode('Berlin', this.options)
      .then((coordinates: NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
      .catch((error: any) => console.log(error))
  }

  submitRegistartion() {
    this.route.navigateByUrl('/partner-profile-setting');
  }

}
