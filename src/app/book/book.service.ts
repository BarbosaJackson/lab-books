import { Injectable } from '@angular/core';
import {BookModel} from './book.model';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books: BookModel[];
  constructor(private bookService: BookService, private httpService: HttpClient) {
    this.books = [];
  }
  private headers = new HttpHeaders({'Content-type' : 'application/json'});
  addBook(book: BookModel) {
    this.books.push(book);
  }
  getBooks() {
    return this.books;
  }
  saveBook(book: BookModel) {
    return this.httpService.post('./assets/books.json', JSON.stringify(book));
  }

}
