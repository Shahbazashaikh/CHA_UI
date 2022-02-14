import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsigneeMasterComponent } from './consignee-master.component';

describe('ConsigneeMasterComponent', () => {
  let component: ConsigneeMasterComponent;
  let fixture: ComponentFixture<ConsigneeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsigneeMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsigneeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
