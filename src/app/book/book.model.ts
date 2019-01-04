export class BookModel {
  title: string;
  author: string;
  status: boolean;
  person: string;
  constructor(title: string, author: string) {
    this.status = true;
    this.author = author;
    this.title = title;
    this.person = "";
  }

  getBook(person: string) {
    this.status = false;
    this.person = person;
  }

  backBook() {
    this.status = true;
    this.person = "";
  }
}
