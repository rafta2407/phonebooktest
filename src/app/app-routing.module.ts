
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'phone-book',
  loadChildren: () => import('./phone-book/phone-book.module').then(m => m.PhoneBookModule)
},{
  path: 'phone-entry',
  loadChildren: () => import('./phone-book-entry/phone-book-entry.module').then(m => m.PhoneBookEntryModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
