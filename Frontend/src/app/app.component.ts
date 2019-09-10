import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const myTest: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frontend';

  onClick() {
    myTest();
  }

  constructor(private router: Router) { }


}


