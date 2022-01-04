import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersManagerComponent } from './admin-users-manager.component';

describe('AdminUsersManagerComponent', () => {
  let component: AdminUsersManagerComponent;
  let fixture: ComponentFixture<AdminUsersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
