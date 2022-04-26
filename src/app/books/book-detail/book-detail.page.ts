import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import { Book } from '../book.model';
import { BooksService } from '../books.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {
  loadedBook: Book;
  constructor(
    private ActivateRoute: ActivatedRoute,
    private bookService: BooksService,
    private router: Router,
    private alertCtrl: AlertController
    ) {}

  ngOnInit() {
    this.ActivateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('bookId')){
        return;
      }
      const bookId=paramMap.get('bookId');
      this.loadedBook=this.bookService.getBook(bookId);
    });
  }


  onDeleteBook(){
    this.alertCtrl.create({header: 'Are you sure',
    message:'Do you want to elete this book details',
    buttons:[
      {
        text:'Cancel',
        role:'cancel'
      },
    {
      text:'Delete',
      handler:()=>{
        this.bookService.deleteBook(this.loadedBook.bid);
        this.router.navigate(['/books']);
      }
    }
  ]
  }).then(alertEl=>{
    alertEl.present();
  });

  }

}

/*
deleteBook(bookId: string){
  this.books=this.books.filter(book=>{
    return book.bid !== bookId;
  });
}
*/
