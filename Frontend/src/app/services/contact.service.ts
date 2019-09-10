import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { contact } from '../model/contact';


@Injectable()
export class ContactService {
  private dataUrl = 'http://localhost:3000/contact'

  constructor(private http: Http) { }

  saveContact(obj: contact): Observable<contact[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.dataUrl + '/saveContactData', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));

  }

  SavecontactFormData(obj: FormData): Observable<contact[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.dataUrl + '/save2', obj)
      .pipe(map((res: Response) => res.json()));
  }

  getContact(): Observable<contact[]> {
    return this.http.get(this.dataUrl + '/list')
      .pipe(map((res: Response) => res.json()))
  }

  delContact(obj: string): Observable<contact[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.dataUrl + '/delete/' + obj, options)
      .pipe(map((res: Response) => res.json()));

  }
  updateContact(obj: contact): Observable<contact[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(this.dataUrl + '/updateContact', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));
  }


}
