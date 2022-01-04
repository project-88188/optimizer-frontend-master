import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtSellInvestmentComponent } from './butt-sell-investment.component';

describe('ButtSellInvestmentComponent', () => {
  let component: ButtSellInvestmentComponent;
  let fixture: ComponentFixture<ButtSellInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtSellInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtSellInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
