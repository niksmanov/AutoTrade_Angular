import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from '../../app.interfaces';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  public errors: string[];

  public email: string;

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/forgotpassword',
      {
        email: this.email,
      }).subscribe(r => {
        if (r.succeeded) {
          window.location.href = '/';
        } else {
          this.errors = r.errors;
        }
      })
  }
}
