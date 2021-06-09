import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './resource/rest-api';
import { LocalStorageService } from 'ngx-webstorage';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SearchParams } from './models/product.model';
@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private _spinner = false;

  private _searchParameter = new Subject<any>();
  private _boolModalLogin = new Subject<any>();


  public flag$ = new Subject<any[]>();
  constructor(private http: HttpClient, private storage: LocalStorageService, private router: Router) { }

  newResource<T>(area: string) {
    return new Api<T>(this.http, area, this.storage);
  }

  spinnerOn() {
    setTimeout(() => {
      this._spinner = true;
    }, 0);
  }

  spinnerOff() {
    setTimeout(() => {
      this._spinner = false;
    }, 0);
  }

  isLogged() {
    return (this.storage.retrieve('access')) ? true : false;
  }

  getFlag(): Observable<any[]> {
    return this.flag$;
  }

  shortTitle(title: string, start = 0, finish: number, dots = false) {
    if (title) {
      const long = title.length;
      return `${title.slice(start, finish)}${dots ? '...' : finish > long ? '' : '...'}`;
    } else {
      return '';
    }
  }


  itemsLength(): number {
    return this.storage.retrieve('order') ? this.storage.retrieve('order').length : 0;
  }

  itemsOrder() {
    return this.storage.retrieve('order') ? this.storage.retrieve('order') : [];
  }


  pingModalLogin() {
    this._boolModalLogin.next();
  }

  getParameterSearch(): Observable<any> {
    return this._searchParameter.asObservable();
  }

  getPingModalLogin(): Observable<any> {
    return this._boolModalLogin.asObservable();
  }

  get spinner(): boolean {
    return this._spinner;
  }

}
