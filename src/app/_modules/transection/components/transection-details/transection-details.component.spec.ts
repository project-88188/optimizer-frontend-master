import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionDetailsComponent } from './transection-details.component';

describe('TransectionDetailsComponent', () => {
  let component: TransectionDetailsComponent;
  let fixture: ComponentFixture<TransectionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransectionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
