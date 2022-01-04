import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterprogramTableComponent } from './testerprogram-table.component';

describe('TesterprogramTableComponent', () => {
  let component: TesterprogramTableComponent;
  let fixture: ComponentFixture<TesterprogramTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesterprogramTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesterprogramTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
