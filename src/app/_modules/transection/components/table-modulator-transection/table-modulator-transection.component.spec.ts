import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModulatorTransectionComponent } from './table-modulator-transection.component';

describe('TableModulatorTransectionComponent', () => {
  let component: TableModulatorTransectionComponent;
  let fixture: ComponentFixture<TableModulatorTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableModulatorTransectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableModulatorTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
