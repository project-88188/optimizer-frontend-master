import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtSellBitoptimizerComponent } from './butt-sell-bitoptimizer.component';

describe('ButtSellBitoptimizerComponent', () => {
  let component: ButtSellBitoptimizerComponent;
  let fixture: ComponentFixture<ButtSellBitoptimizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtSellBitoptimizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtSellBitoptimizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
