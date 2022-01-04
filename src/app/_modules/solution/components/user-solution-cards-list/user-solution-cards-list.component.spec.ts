import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSolutionCardsListComponent } from './user-solution-cards-list.component';

describe('UserSolutionCardsListComponent', () => {
  let component: UserSolutionCardsListComponent;
  let fixture: ComponentFixture<UserSolutionCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSolutionCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSolutionCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
