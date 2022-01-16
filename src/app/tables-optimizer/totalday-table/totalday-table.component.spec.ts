import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotaldayTableComponent } from './totalday-table.component';

describe('TotaldayTableComponent', () => {
  let component: TotaldayTableComponent;
  let fixture: ComponentFixture<TotaldayTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotaldayTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotaldayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
