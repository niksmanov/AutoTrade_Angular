import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResponseModel } from '../../app.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public errors: string[];

  public email: string;
  public password: string;
  public rememberMe: boolean = true;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  onSubmit() {
    this.http.post<ResponseModel>('/user/login',
      {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      }).subscribe(r => {
        if (r.succeeded) {
          this.router.navigateByUrl('/');
        } else {
          this.errors = r.errors;
        }
      })
  }
}

