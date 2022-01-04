import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSolutionCardsListComponent } from './market-solution-cards-list.component';

describe('MarketSolutionCardsListComponent', () => {
  let component: MarketSolutionCardsListComponent;
  let fixture: ComponentFixture<MarketSolutionCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketSolutionCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketSolutionCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
