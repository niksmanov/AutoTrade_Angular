import { Component } from '@angular/core';
import { ResponseModel } from '../../app.interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  public errors: string[];
  public email: string;
  public oldPassword: string;
  public password: string;

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/resetpassword',
      {
        email: this.email,
        oldPassword: this.oldPassword,
        password: this.password,
      }).subscribe(r => {
        this.errors = r.errors;
        window.location.reload();
      })
  }
}
