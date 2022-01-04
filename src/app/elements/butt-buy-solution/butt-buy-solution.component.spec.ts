import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtBuySolutionComponent } from './butt-buy-solution.component';

describe('ButtBuySolutionComponent', () => {
  let component: ButtBuySolutionComponent;
  let fixture: ComponentFixture<ButtBuySolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtBuySolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtBuySolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
