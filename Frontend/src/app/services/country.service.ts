import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  cntURl1: string = 'https://restcountries.eu/rest/v2/alpha/col';

  cntURl: string = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  getCountries() {
    return this.http.get(this.cntURl1).pipe(map(data => data));
  }

  getURLData() {
    return this.http.get(this.cntURl).pipe(map(data => data));
  }
}

