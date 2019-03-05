import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  constructor(http: HttpClient) {
    http.post('/user/login', {}).subscribe(result => {
     
    }, error => console.error(error));
  }

}
