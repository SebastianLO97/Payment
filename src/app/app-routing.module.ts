import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PaymentComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
