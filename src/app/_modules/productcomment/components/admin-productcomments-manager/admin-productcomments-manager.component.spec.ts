import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductcommentsManagerComponent } from './admin-productcomments-manager.component';

describe('AdminProductcommentsManagerComponent', () => {
  let component: AdminProductcommentsManagerComponent;
  let fixture: ComponentFixture<AdminProductcommentsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductcommentsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductcommentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
