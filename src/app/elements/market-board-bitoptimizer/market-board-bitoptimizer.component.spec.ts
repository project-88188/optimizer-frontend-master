import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBoardBitoptimizerComponent } from './market-board-bitoptimizer.component';

describe('MarketBoardBitoptimizerComponent', () => {
  let component: MarketBoardBitoptimizerComponent;
  let fixture: ComponentFixture<MarketBoardBitoptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBoardBitoptimizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBoardBitoptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
