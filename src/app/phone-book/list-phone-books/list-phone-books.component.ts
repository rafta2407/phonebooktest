import { PhoneBookService } from './../../services/phone-book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-phone-books',
  templateUrl: './list-phone-books.component.html',
  styleUrls: ['./list-phone-books.component.scss']
})
export class ListPhoneBooksComponent {

  public phoneBooks$ = this.service.phoneBooks$;

  constructor(private service: PhoneBookService) { }

}
