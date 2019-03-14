import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProfileSettingPage } from './partner-profile-setting.page';

describe('PartnerProfileSettingPage', () => {
  let component: PartnerProfileSettingPage;
  let fixture: ComponentFixture<PartnerProfileSettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerProfileSettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProfileSettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
