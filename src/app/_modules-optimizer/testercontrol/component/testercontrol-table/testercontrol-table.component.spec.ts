import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestercontrolTableComponent } from './testercontrol-table.component';

describe('TestercontrolTableComponent', () => {
  let component: TestercontrolTableComponent;
  let fixture: ComponentFixture<TestercontrolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestercontrolTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestercontrolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
