import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionsListComponent } from './transections-list.component';

describe('TransectionsListComponent', () => {
  let component: TransectionsListComponent;
  let fixture: ComponentFixture<TransectionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransectionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
