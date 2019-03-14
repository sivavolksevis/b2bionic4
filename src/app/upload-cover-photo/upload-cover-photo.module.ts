import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadCoverPhotoPage } from './upload-cover-photo.page';

const routes: Routes = [
  {
    path: '',
    component: UploadCoverPhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadCoverPhotoPage]
})
export class UploadCoverPhotoPageModule {}
