import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestresultTableComponent } from './testresult-table.component';

describe('TestresultTableComponent', () => {
  let component: TestresultTableComponent;
  let fixture: ComponentFixture<TestresultTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestresultTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestresultTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
