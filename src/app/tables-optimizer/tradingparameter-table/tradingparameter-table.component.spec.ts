import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingparameterTableComponent } from './tradingparameter-table.component';

describe('TradingparameterTableComponent', () => {
  let component: TradingparameterTableComponent;
  let fixture: ComponentFixture<TradingparameterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingparameterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingparameterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
