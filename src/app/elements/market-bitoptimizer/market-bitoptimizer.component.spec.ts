import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketBitoptimizerComponent } from './market-bitoptimizer.component';

describe('MarketBitoptimizerComponent', () => {
  let component: MarketBitoptimizerComponent;
  let fixture: ComponentFixture<MarketBitoptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketBitoptimizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketBitoptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
