import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPaymentDialogComponent } from './success-payment-dialog.component';

describe('SuccessPaymentDialogComponent', () => {
  let component: SuccessPaymentDialogComponent;
  let fixture: ComponentFixture<SuccessPaymentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessPaymentDialogComponent]
    });
    fixture = TestBed.createComponent(SuccessPaymentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
