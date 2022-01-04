import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminModeratorsManagerComponent } from './admin-moderators-manager.component';

describe('AdminModeratorsManagerComponent', () => {
  let component: AdminModeratorsManagerComponent;
  let fixture: ComponentFixture<AdminModeratorsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminModeratorsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminModeratorsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
