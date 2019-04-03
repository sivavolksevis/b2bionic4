import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams  } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-management',
  templateUrl: './catalog-management.page.html',
  styleUrls: ['./catalog-management.page.scss'],
})
export class CatalogManagementPage implements OnInit {

  constructor(private route: Router,) { }

  detailPage() {
    this.route.navigateByUrl('/detail-services')
  }


  ngOnInit() {
  }

}
