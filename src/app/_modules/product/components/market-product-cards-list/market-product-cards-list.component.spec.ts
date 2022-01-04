import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketProductCardsListComponent } from './market-product-cards-list.component';

describe('MarketProductCardsListComponent', () => {
  let component: MarketProductCardsListComponent;
  let fixture: ComponentFixture<MarketProductCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketProductCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketProductCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
