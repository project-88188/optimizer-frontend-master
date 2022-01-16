import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTableComponent } from './expert-table.component';

describe('ExpertTableComponent', () => {
  let component: ExpertTableComponent;
  let fixture: ComponentFixture<ExpertTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
