import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositTableComponent } from './deposit-table.component';

describe('DepositTableComponent', () => {
  let component: DepositTableComponent;
  let fixture: ComponentFixture<DepositTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
