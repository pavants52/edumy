import {Component, OnInit} from '@angular/core';
import { SharedService } from '../../utilityApp/services/shared.service';
import { Book } from './books/book';
import {BookService} from "./books/book.service";

@Component({
  selector: 'booksearch',
  templateUrl: './booksearch.component.html'
})
export class BookSearchComponent implements OnInit {


  books:Book[];
  constructor(private bookService: BookService) { }

  ngOnInit():void {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks().then(values => this.books = values)
  }
}
