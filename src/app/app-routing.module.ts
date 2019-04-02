import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login-phone', loadChildren: './login-phone/login-phone.module#LoginPhonePageModule' },
  { path: 'login-email', loadChildren: './login-email/login-email.module#LoginEmailPageModule' },
  { path: 'partner-profile-setting', loadChildren: './partner-profile-setting/partner-profile-setting.module#PartnerProfileSettingPageModule' },
  { path: 'select-service', loadChildren: './select-service/select-service.module#SelectServicePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'business-info', loadChildren: './business-info/business-info.module#BusinessInfoPageModule' },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'upload-profile-picture', loadChildren: './upload-profile-picture/upload-profile-picture.module#UploadProfilePicturePageModule' },
  { path: 'upload-cover-photo', loadChildren: './upload-cover-photo/upload-cover-photo.module#UploadCoverPhotoPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'catalog-management', loadChildren: './catalog-management/catalog-management.module#CatalogManagementPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'upload-documents', loadChildren: './upload-documents/upload-documents.module#UploadDocumentsPageModule' },
   { path: 'document-verification', loadChildren: './document-verification/document-verification.module#DocumentVerificationPageModule' }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
