import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksPage } from './books.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: 'book-detail',
    loadChildren: () => import('./book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
