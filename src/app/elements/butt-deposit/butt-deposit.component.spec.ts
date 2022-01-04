import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtDepositComponent } from './butt-deposit.component';

describe('ButtDepositComponent', () => {
  let component: ButtDepositComponent;
  let fixture: ComponentFixture<ButtDepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtDepositComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
