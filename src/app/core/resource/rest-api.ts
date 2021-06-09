import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNil } from 'lodash';
import { LocalStorageService } from 'ngx-webstorage';
export class Api<T> {
  private _url: string;
  private _token: string;
  private _tokenRefreshed = false;
  private headersWithoutAuth: HttpHeaders;

  constructor(
    public _http: HttpClient,
    public _area: string,
    private storage: LocalStorageService,
  ) {
    this._url = 'http://localhost:8080';
    //this._url = 'http://localhost:8000';
    this._token = '';

    this.headersWithoutAuth = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD',
      'Access-Control-Allow-Headers':
        `Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control`,
      'Content-Type': 'Application/json'
    });


  }

  private createHeader(): any {
    return { headers: new HttpHeaders({ 'Content-Type': 'Application/json' }), responseType: 'text' };
  }

  find(where?: any, subR?: any, useToken: boolean = true): Observable<T> {
    return this._http.get<T>(`${this._url}/${this._area}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`,
      { headers: this.headersWithoutAuth });
  }

  findById(_id: number, useToken: boolean = true): Observable<T> {
    return this._http.get<T>(`${this._url}/${this._area}/${_id}`,
      { headers: this.headersWithoutAuth });
  }

  insert(obj: T, subR?: any): Observable<T> {
    return this._http.post<T>(`${this._url}/${this._area}${!isNil(subR) ? `/${subR}` : ''}`,
      obj, { headers: this.createHeader() });
  }

  update(obj: T, where?: any, subR?: any, id = 'id'): Observable<T> {
    return this._http.put<T>(`${this._url}/${this._area}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`, obj, { headers: this.createHeader() });
  }

  put(obj?: T, where?: any, subR?: any, id = 'id'): Observable<T> {
    return this._http.put<T>(`${this._url}/${this._area}/${id}${isNil(subR) ? '' :
      `/${subR}`}${isNil(where) ? '' : `?${where}`}`, obj, { headers: this.createHeader() });
  }
}
