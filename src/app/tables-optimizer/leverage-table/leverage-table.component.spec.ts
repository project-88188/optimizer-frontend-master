import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverageTableComponent } from './leverage-table.component';

describe('LeverageTableComponent', () => {
  let component: LeverageTableComponent;
  let fixture: ComponentFixture<LeverageTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeverageTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverageTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
