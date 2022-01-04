import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsercontentComponent } from './add-usercontent.component';

describe('AddUsercontentComponent', () => {
  let component: AddUsercontentComponent;
  let fixture: ComponentFixture<AddUsercontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsercontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsercontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
