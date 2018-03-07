import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'booklist',
  templateUrl: './booklist.component.html',
})
export class BookListComponent implements OnInit{

  books:Book[];
  constructor(private bookService: BookService) { }

  ngOnInit():void {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks().then(values => this.books = values)
  }
}
