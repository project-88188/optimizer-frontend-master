import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketInvestmentComponent } from './market-investment.component';

describe('MarketInvestmentComponent', () => {
  let component: MarketInvestmentComponent;
  let fixture: ComponentFixture<MarketInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
