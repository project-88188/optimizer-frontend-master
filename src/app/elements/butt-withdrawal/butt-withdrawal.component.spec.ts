import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtWithdrawalComponent } from './butt-withdrawal.component';

describe('ButtWithdrawalComponent', () => {
  let component: ButtWithdrawalComponent;
  let fixture: ComponentFixture<ButtWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtWithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
