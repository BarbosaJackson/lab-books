import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BookResolver} from './book/book.resolver';

const appRoutes: Routes = [
  {
    path: '',
    resolve: { books: BookResolver },
    children: [
      {path: '', component: BookComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [BookResolver],
  bootstrap: [AppComponent]
})
export class AppModule {

}
