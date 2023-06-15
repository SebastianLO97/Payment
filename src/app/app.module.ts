import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './Components/payment/payment.component';
import { CardComponent } from './Components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarNumberDirective } from './Directives/car-number.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { OnlyNumbersDirective } from './Directives/only-numbers.directive';
import { SuccessPaymentDialogComponent } from './Dialogs/success-payment-dialog/success-payment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    CardComponent,
    CarNumberDirective,
    OnlyNumbersDirective,
    SuccessPaymentDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
