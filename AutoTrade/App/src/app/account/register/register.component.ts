import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as Interfaces from '../../app.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  public errors: string[];

  public email: string;
  public username: string;
  public password: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  onSubmit() {
    this.http.post<Interfaces.ResponseModel>('/user/register',
      {
        email: this.email,
        username: this.username,
        password: this.password,
      }).subscribe(r => {
        if (r.succeeded) {
          this.router.navigateByUrl('/');
        } else {
          this.errors = r.errors;
        }
      })
  }
}
