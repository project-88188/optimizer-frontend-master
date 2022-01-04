import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingTitleComponent } from './greeting-title.component';

describe('GreetingTitleComponent', () => {
  let component: GreetingTitleComponent;
  let fixture: ComponentFixture<GreetingTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
