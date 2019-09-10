import { Component, OnInit } from '@angular/core';
import { CountryService } from '../services/country.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  providers: [CountryService]
})
export class CountryComponent implements OnInit {

  countryForm: FormGroup;
  getExchangeRate;

  countriesValues = [
    { id: 1, name: "United States" },
    { id: 2, name: "Australia" },
    { id: 3, name: "Canada" },
    { id: 4, name: "Brazil" },
    { id: 5, name: "England" }
  ];
  htmlValue
  countries: Object;
  userData: { "Banana", "Orange", "Apple", "Mango" };
  //userData1: { name: 'sanjay', city: 'chandigarh' }
  html;

  constructor(private cntservice: CountryService, private fb: FormBuilder, private _sanitizer: DomSanitizer) {

    this.html = _sanitizer.bypassSecurityTrustHtml('<b>sanjay</b>');

    this.countryForm = new FormGroup({
      country: new FormControl(null)
    })
  }

  ngOnInit() {
    this.cntservice.getCountries().subscribe(data => {
      this.countries = data;
      console.log(data);
    });


    this.cntservice.getURLData().subscribe(data => {
      this.countries = data;
      console.log(data);
    });
  }

  get country(): string {
    return this.countryForm ? this.countryForm.get('country').value : '';
  }



}
