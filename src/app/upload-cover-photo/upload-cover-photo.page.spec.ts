import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoverPhotoPage } from './upload-cover-photo.page';

describe('UploadCoverPhotoPage', () => {
  let component: UploadCoverPhotoPage;
  let fixture: ComponentFixture<UploadCoverPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCoverPhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCoverPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
