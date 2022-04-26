import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import {BooksService} from  './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books:Book[];
  constructor(private booksService: BooksService) {}
  ngOnInit() {
    this.books=this.booksService.getAllBooks();
  }
}
