import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../../app.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  errors: string[];

  email: string;
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/register',
      {
        email: this.email,
        username: this.username,
        password: this.password,
      }).subscribe(r => {
        if (r.succeeded) {
          window.location.href = '/';
        } else {
          this.errors = r.errors;
        }
      })
  }
}
