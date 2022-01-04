import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsercontentsCardComponent } from './admin-usercontents-card.component';

describe('AdminUsercontentsCardComponent', () => {
  let component: AdminUsercontentsCardComponent;
  let fixture: ComponentFixture<AdminUsercontentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsercontentsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsercontentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
