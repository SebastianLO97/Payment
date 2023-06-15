import { Component, Input, OnChanges } from '@angular/core';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  @Input() cardNumber!: string;
  @Input() cardHolder!: string;

  cardNumberFormatted: string = '';

  faCreditCard = faCreditCard;

  ngOnChanges() {
    this.hideCardNumbers();
  }

  hideCardNumbers() {
    let cardFormatted = '';
    if (this.cardNumber.length < 15) {
      for (let i = 0; i < this.cardNumber.length; i++) {
        if (this.cardNumber[i] != ' ') {
          cardFormatted = cardFormatted + '*';
        } else {
          cardFormatted = cardFormatted + ' ';
        }
      }
    } else {
      const lastCardNumbers = this.cardNumber.slice(15);
      cardFormatted = '**** **** **** ';
      for (let i = 0; i < lastCardNumbers.length; i++) {
        cardFormatted = cardFormatted + lastCardNumbers[i];
      }
    }
    this.cardNumberFormatted = cardFormatted;
  }
}
