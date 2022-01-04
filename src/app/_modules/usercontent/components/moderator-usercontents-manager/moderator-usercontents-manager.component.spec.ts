import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorUsercontentsManagerComponent } from './moderator-usercontents-manager.component';

describe('ModeratorUsercontentsManagerComponent', () => {
  let component: ModeratorUsercontentsManagerComponent;
  let fixture: ComponentFixture<ModeratorUsercontentsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorUsercontentsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorUsercontentsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
