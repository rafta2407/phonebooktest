import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book-card',
  templateUrl: './phone-book-card.component.html',
  styleUrls: ['./phone-book-card.component.scss']
})
export class PhoneBookCardComponent {

  @Input() name: string;
  @Input() number: string;
  constructor() { }


}
