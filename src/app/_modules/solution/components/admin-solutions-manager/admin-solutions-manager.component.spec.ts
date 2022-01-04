import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolutionsManagerComponent } from './admin-solutions-manager.component';

describe('AdminSolutionsManagerComponent', () => {
  let component: AdminSolutionsManagerComponent;
  let fixture: ComponentFixture<AdminSolutionsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolutionsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolutionsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
