import { PhoneBookDetailsComponent } from './phone-book-details/phone-book-details.component';
import { CreatePhoneBookComponent } from './create-phone-book/create-phone-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPhoneBooksComponent } from './list-phone-books/list-phone-books.component';

const routes: Routes = [{path: 'create', component: CreatePhoneBookComponent},
{path: 'detail/:id', component: PhoneBookDetailsComponent},
{ path: 'list', component: ListPhoneBooksComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
