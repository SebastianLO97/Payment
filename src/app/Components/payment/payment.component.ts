import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';
import { SuccessPaymentDialogComponent } from 'src/app/Dialogs/success-payment-dialog/success-payment-dialog.component';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YY',
  },
  display: {
    dateInput: 'MM/YY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PaymentComponent {

  constructor(public dialog: MatDialog) {}

  @ViewChild("inputCardNumber") inputCardNumber!: ElementRef;

  cardNumber: string = '';
  cardHolder: string = '';
  cvv: string = '';

  today: Date = new Date;

  date = new FormControl(moment());

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  makePayment(){
    if(this.isValid()){
      this.dialog.open(SuccessPaymentDialogComponent);
    }
  }

  cancel(){
    this.cardNumber = '';
    this.cardHolder = '';
    this.cvv = '';
    this.inputCardNumber.nativeElement.value = '';
  }

  isValid(): boolean{
    if(isNullOrWhitespace(this.cardNumber) || this.cardNumber.length != 19){
      return false
    }
    if(isNullOrWhitespace(this.cardHolder) || this.cardHolder.length > 50 ){
      return false;
    }
    if(isNullOrWhitespace(this.cvv) || this.cvv.length != 3 ){
      return false;
    }
    if(!this.date.value || !this.date.valid){
      return false;
    }
    return true;
  }
}

function isNullOrWhitespace( input: string ) {
  return !input || !input.trim();
}
