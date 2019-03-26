import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  submit() {
    this.route.navigateByUrl('/business-info');
  }

}
