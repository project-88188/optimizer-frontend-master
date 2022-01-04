import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizercontrolTableComponent } from './optimizercontrol-table.component';

describe('OptimizercontrolTableComponent', () => {
  let component: OptimizercontrolTableComponent;
  let fixture: ComponentFixture<OptimizercontrolTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizercontrolTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizercontrolTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
