import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSolutioncommentsManagerComponent } from './admin-solutioncomments-manager.component';

describe('AdminSolutioncommentsManagerComponent', () => {
  let component: AdminSolutioncommentsManagerComponent;
  let fixture: ComponentFixture<AdminSolutioncommentsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSolutioncommentsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSolutioncommentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
