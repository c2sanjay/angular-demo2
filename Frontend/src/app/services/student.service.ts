import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { student } from '../model/student';

@Injectable()
export class StudentService {
  private dataUrl = 'http://localhost:3000/student';

  constructor(private http: Http) { }

  saveStudentData(obj: student): Observable<student[]> {

    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header })

    return this.http.post(this.dataUrl + '/saveStudent', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));

  }
  getStudent(): Observable<student[]> {
    return this.http.get(this.dataUrl + '/list')
      .pipe(map((res: Response) => res.json()));
  }


  delStudentData(obj: string): Observable<student[]> {

    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header })

    return this.http.delete(this.dataUrl + '/delStudent/' + obj, options)
      .pipe(map((res: Response) => res.json()))
  }

  updateStudentData(obj: student): Observable<student[]> {
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });

    return this.http.put(this.dataUrl + '/updateStudent', { 'data': obj }, options)
      .pipe(map((res: Response) => res.json()));


  }

}
