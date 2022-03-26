import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeSupplierMasterComponent } from './consignee-supplier-master.component';

describe('ConsigneeMasterComponent', () => {
  let component: ConsigneeSupplierMasterComponent;
  let fixture: ComponentFixture<ConsigneeSupplierMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeSupplierMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigneeSupplierMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
