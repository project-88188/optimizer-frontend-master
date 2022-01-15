import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdminTransectionComponent } from './table-admin-transection.component';

describe('TableAdminTransectionComponent', () => {
  let component: TableAdminTransectionComponent;
  let fixture: ComponentFixture<TableAdminTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdminTransectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdminTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
