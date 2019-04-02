import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams  } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-catalog-management',
  templateUrl: './catalog-management.page.html',
  styleUrls: ['./catalog-management.page.scss'],
})
export class CatalogManagementPage implements OnInit {

  constructor(public modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }



  ngOnInit() {
  }

}
