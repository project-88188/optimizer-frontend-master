import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontentCardComponent } from './usercontent-card.component';

describe('UsercontentCardComponent', () => {
  let component: UsercontentCardComponent;
  let fixture: ComponentFixture<UsercontentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercontentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
