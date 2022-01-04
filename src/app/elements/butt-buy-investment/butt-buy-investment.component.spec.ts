import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtBuyInvestmentComponent } from './butt-buy-investment.component';

describe('ButtBuyInvestmentComponent', () => {
  let component: ButtBuyInvestmentComponent;
  let fixture: ComponentFixture<ButtBuyInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtBuyInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtBuyInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
