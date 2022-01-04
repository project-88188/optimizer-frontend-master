import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtBuyBitoptimizerComponent } from './butt-buy-bitoptimizer.component';

describe('ButtBuyBitoptimizerComponent', () => {
  let component: ButtBuyBitoptimizerComponent;
  let fixture: ComponentFixture<ButtBuyBitoptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtBuyBitoptimizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtBuyBitoptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
