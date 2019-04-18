import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../../app.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  errors: string[];

  email: string;
  password: string;
  rememberMe: boolean = true;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/login',
      {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      }).subscribe(r => {
        if (r.succeeded) {
          window.location.href = '/';
        } else {
          this.errors = r.errors;
        }
      })
  }
}

