import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogManagementPage } from './catalog-management.page';

describe('CatalogManagementPage', () => {
  let component: CatalogManagementPage;
  let fixture: ComponentFixture<CatalogManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
