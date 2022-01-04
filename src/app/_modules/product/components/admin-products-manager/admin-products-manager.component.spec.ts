import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsManagerComponent } from './admin-products-manager.component';

describe('AdminProductsManagerComponent', () => {
  let component: AdminProductsManagerComponent;
  let fixture: ComponentFixture<AdminProductsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
