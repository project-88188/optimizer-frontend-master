import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeronthecloudComponent } from './optimizeronthecloud.component';

describe('OptimizeronthecloudComponent', () => {
  let component: OptimizeronthecloudComponent;
  let fixture: ComponentFixture<OptimizeronthecloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimizeronthecloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizeronthecloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
