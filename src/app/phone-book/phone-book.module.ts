import { PhoneBookEntryModule } from './../phone-book-entry/phone-book-entry.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { CreatePhoneBookComponent } from './create-phone-book/create-phone-book.component';
import { PhoneBookDetailsComponent } from './phone-book-details/phone-book-details.component';
import { FormsModule } from '@angular/forms';
import { ListPhoneBooksComponent } from './list-phone-books/list-phone-books.component';


@NgModule({
  declarations: [CreatePhoneBookComponent, PhoneBookDetailsComponent, ListPhoneBooksComponent],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PhoneBookEntryModule
  ]
})
export class PhoneBookModule { }
