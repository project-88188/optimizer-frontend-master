import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtBuyProductComponent } from './butt-buy-product.component';

describe('ButtBuyProductComponent', () => {
  let component: ButtBuyProductComponent;
  let fixture: ComponentFixture<ButtBuyProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtBuyProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtBuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
