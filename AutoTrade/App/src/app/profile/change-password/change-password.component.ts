import { Component } from '@angular/core';
import { ResponseModel } from '../../app.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  errors: string[];
  email: string;
  oldPassword: string;
  password: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/resetpassword',
      {
        email: this.email,
        oldPassword: this.oldPassword,
        password: this.password,
      }).subscribe(r => {
        this.errors = r.errors;
        if (r.succeeded) {
          window.location.reload();
        }
      })
  }
}
