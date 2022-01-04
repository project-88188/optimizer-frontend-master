import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductCardsListComponent } from './user-product-cards-list.component';

describe('UserProductCardsListComponent', () => {
  let component: UserProductCardsListComponent;
  let fixture: ComponentFixture<UserProductCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
