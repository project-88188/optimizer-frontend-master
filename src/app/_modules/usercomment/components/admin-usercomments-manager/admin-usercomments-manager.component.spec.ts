import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsercommentsManagerComponent } from './admin-usercomments-manager.component';

describe('AdminUsercommentsManagerComponent', () => {
  let component: AdminUsercommentsManagerComponent;
  let fixture: ComponentFixture<AdminUsercommentsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsercommentsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsercommentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
