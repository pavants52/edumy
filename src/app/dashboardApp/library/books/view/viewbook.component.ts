import { Component,OnInit} from '@angular/core';
import { SharedService } from '../../../../utilityApp/services/shared.service';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'viewbook',
  templateUrl: './viewbook.component.html'
})
export class ViewBookComponent implements OnInit{
  //title = 'app works!';
  book:Book;
  constructor( private route: ActivatedRoute,
               private location: Location,
               private bookService:BookService,
               private router: Router){ }

  ngOnInit():void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.bookService.getBook(+params.get('id')))
      .subscribe(book => {this.book = book;});
  }
}
