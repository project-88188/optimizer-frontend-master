import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsercontentDetailsComponent } from './usercontent-details.component';

describe('UsercontentDetailsComponent', () => {
  let component: UsercontentDetailsComponent;
  let fixture: ComponentFixture<UsercontentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercontentDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
