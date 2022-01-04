import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontentsListComponent } from './usercontents-list.component';

describe('UsercontentsListComponent', () => {
  let component: UsercontentsListComponent;
  let fixture: ComponentFixture<UsercontentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercontentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
