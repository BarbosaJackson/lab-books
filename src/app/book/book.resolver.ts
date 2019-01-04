import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {BookModel} from './book.model';

@Injectable()
export class BookResolver implements Resolve<BookModel>{
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return undefined;
  }

}
