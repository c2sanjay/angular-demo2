import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private router: Router, private registerService: RegisterService, ) { }

  loginForm: FormGroup = this.builder.group({

    Username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    Password: new FormControl(null, [Validators.required, Validators.minLength(4)])
  })

  loginSave() {
    this.registerService.saveLoginData(this.loginForm.value).subscribe(data => {
      console.log(this.loginForm.value);
      console.log(data);
      if (data.success == true) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('Username', data.Username);
        this.router.navigateByUrl('/');
      }
      else {
        console.log('Login Failed');
      }
    })
  }

  ngOnInit() {
  }

}
