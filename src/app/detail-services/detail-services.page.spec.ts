import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailServicesPage } from './detail-services.page';

describe('DetailServicesPage', () => {
  let component: DetailServicesPage;
  let fixture: ComponentFixture<DetailServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
