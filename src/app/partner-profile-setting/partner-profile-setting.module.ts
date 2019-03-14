import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PartnerProfileSettingPage } from './partner-profile-setting.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerProfileSettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PartnerProfileSettingPage]
})
export class PartnerProfileSettingPageModule {}
