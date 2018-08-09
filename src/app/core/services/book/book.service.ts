import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../models/book';
import { DonateBookUser } from '../../models/donateBookUser';
import { map } from 'rxjs/operators';

import { APP_CONFIG, AppConfig } from '../../../app-config.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // TODO TypicodeInterceptor
  constructor(private _http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getAll() {
    return this._http.get<Book[]>(`${this.config.apiEndpoint}/book`);
  }

  public getTop15NewBooks() {
    return this._http.get<Book[]>(`${this.config.apiEndpoint}/book/Top15NewBooks`);
  }

  public getRandom15Books() {
    return this._http.get<Book[]>(`${this.config.apiEndpoint}/book/Random15Books`);
  }

  public create(book: Book) {
    return this._http.post<Book>(`${this.config.apiEndpoint}/book`, book);
  }

  public getById(bookId: string) {
    return this._http.get<Book>(`${this.config.apiEndpoint}/book/${bookId}`);
  }

  public update(book: Book) {
    return this._http.put<Book>(`${this.config.apiEndpoint}/book/${book.id}`, book);
  }

  public delete(bookId: number) {
    return this._http.delete(`${this.config.apiEndpoint}/book/${bookId}`);
  }

  public getFreightOptions() {
    return this._http.get<any>(`${this.config.apiEndpoint}/book/freightOptions`).pipe(
      map(response => {
        return response;
      })
    );
  }

  public getGranteeUsersByBookId(bookId: string) {
    return this._http.get(`${this.config.apiEndpoint}/book/GranteeUsersByBookId/${bookId}`);
  }

  public donateBookUser(bookId: string, donateBookUser: DonateBookUser) {
    return this._http.put<Book>(`${this.config.apiEndpoint}/book/${bookId}`, donateBookUser);
  }
}
