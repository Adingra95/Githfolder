import { Injectable } from '@angular/core';
import {Book} from './book.model';
//import {Book} from './book.model‘;
@Injectable({
providedIn:'root'
})
export class BooksService {
private books: Book []=[
{
bid:'AI-1010',
btitle: 'Dell laptop',
imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vtEBBHsF_8Derpf9qLdF9APc5GYGzOjYxEcyHgCBJUoev_hcmJYEpp0xvMhKS4L-6_M&usqp=CAU',
authors:['Price: 15000rs','']
},
{
bid:'IoT-1011',
btitle: 'Hp laptop',
imageUrl: 'https://cdn.mos.cms.futurecdn.net/bwcE9CwvUuDvp99XcBywwm.jpeg',
authors:['Price:50000rs','']
}
];
constructor() {}
getAllBooks() {
return [...this.books];
}
getBook(bookId: string){
return {
...this.books.find(book=> {
return book.bid===bookId;
})
};
}

deleteBook(bookId: string){
  this.books=this.books.filter(book=>{
    return book.bid !== bookId;
  });
}

}
