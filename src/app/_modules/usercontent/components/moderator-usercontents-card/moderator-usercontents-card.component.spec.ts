import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUsercontentsCardComponent } from './moderator-usercontents-card.component';

describe('ModeratorUsercontentsCardComponent', () => {
  let component: ModeratorUsercontentsCardComponent;
  let fixture: ComponentFixture<ModeratorUsercontentsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUsercontentsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorUsercontentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
