import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterresultTableComponent } from './testerresult-table.component';

describe('TesterresultTableComponent', () => {
  let component: TesterresultTableComponent;
  let fixture: ComponentFixture<TesterresultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterresultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterresultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
