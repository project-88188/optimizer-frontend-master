import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransectionCardsListComponent } from './user-transection-cards-list.component';

describe('UserTransectionCardsListComponent', () => {
  let component: UserTransectionCardsListComponent;
  let fixture: ComponentFixture<UserTransectionCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTransectionCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransectionCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
