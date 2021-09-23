import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneBookEntryRoutingModule } from './phone-book-entry-routing.module';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { PhoneBookCardComponent } from './phone-book-card/phone-book-card.component';


@NgModule({
  declarations: [CreateEntryComponent, PhoneBookCardComponent],
  imports: [
    CommonModule,
    PhoneBookEntryRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PhoneBookCardComponent
  ]
})
export class PhoneBookEntryModule { }
