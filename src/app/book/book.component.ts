import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookModel} from './book.model';
import {BookService} from './book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: BookModel[];
  addBookB: boolean;
  constructor(private httpService: HttpClient, private bookService: BookService, private router: Router) {
    this.addBookB = false;
  }

  defineStatus(book: BookModel): string {
    if(!book.status){
      return "Emprestado";
    }
    return "Disponivel";
  }

  definePerson(book: BookModel): string {
    if(!book.status) {
      return book.person;
    }
    return "----";
  }

  addBook() {
    this.addBookB = !this.addBookB;
  }


  ngOnInit() {
    this.httpService.get('./assets/books.json').subscribe(
      data => {
        this.books = data as BookModel[];
      }
    );
  }
  newBook(title: string, author: string) {
    this.bookService.saveBook(new BookModel(title, author)).subscribe(data => this.router.navigate(['']));
  }

}
