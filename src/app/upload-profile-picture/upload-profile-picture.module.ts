import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadProfilePicturePage } from './upload-profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: UploadProfilePicturePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadProfilePicturePage]
})
export class UploadProfilePicturePageModule {}
