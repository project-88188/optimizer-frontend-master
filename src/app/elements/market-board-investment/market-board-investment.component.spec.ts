import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBoardInvestmentComponent } from './market-board-investment.component';

describe('MarketBoardInvestmentComponent', () => {
  let component: MarketBoardInvestmentComponent;
  let fixture: ComponentFixture<MarketBoardInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBoardInvestmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBoardInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
