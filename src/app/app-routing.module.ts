import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'phone-book',
  loadChildren: () => import('./phone-book/phone-book.module').then(m => m.PhoneBookModule)
}, {
  path: 'phone-entry',
  loadChildren: () => import('./phone-book-entry/phone-book-entry.module').then(m => m.PhoneBookEntryModule)
}, {
    path: '',
    redirectTo: 'phone-book',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
