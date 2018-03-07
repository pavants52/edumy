import { Component,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Book } from './book';
import { BookService } from './book.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'book-cm-form',
  templateUrl: './book-cm-form.component.html'
})
export class BookCmFormComponent {
  @Input() book:Book;
  constructor(private router: Router,private bookService: BookService) { }

  saveBook():void {
    debugger;
    console.log("book" + this.book);
    if(!this.book.id) {
      this.bookService.create(this.book)
        .then(res => {
          console.log("created" + res);
          this.goToBookList();
          this.book = res;

        });

    } else {
      this.bookService.update(this.book)
        .then(() => {
          console.log("updated" + this.book);
          this.goToBookList();
        })
    }

  }
  cancel():void {
    this.goToBookList();
  }
  goToBookList():void {
    this.router.navigate(['/booklist']);
  }
}
