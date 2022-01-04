import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeratorDetailComponent } from './moderator-detail.component';

describe('ModeratorDetailComponent', () => {
  let component: ModeratorDetailComponent;
  let fixture: ComponentFixture<ModeratorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeratorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeratorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
