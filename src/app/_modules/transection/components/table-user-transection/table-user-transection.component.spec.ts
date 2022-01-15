import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUserTransectionComponent } from './table-user-transection.component';

describe('TableUserTransectionComponent', () => {
  let component: TableUserTransectionComponent;
  let fixture: ComponentFixture<TableUserTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableUserTransectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUserTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
