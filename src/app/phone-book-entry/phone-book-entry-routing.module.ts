import { ListPhoneBooksComponent } from './../phone-book/list-phone-books/list-phone-books.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: 'create/:id', component: CreateEntryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PhoneBookEntryRoutingModule { }
