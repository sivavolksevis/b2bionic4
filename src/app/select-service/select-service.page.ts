import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-service',
  templateUrl: './select-service.page.html',
  styleUrls: ['./select-service.page.scss'],
})
export class SelectServicePage implements OnInit {

  listOfServices = [];

  constructor(private route: Router) { }

  ngOnInit() {
    this.listOfServices = ["Automobile Services", "Health & Personal", "Electronics & Appliances", "Photography Services", "Home Maintenance", "Cleaning Services", "Document Services"]
  }
  contuine() {

    this.route.navigateByUrl('/contact')

  }

}
