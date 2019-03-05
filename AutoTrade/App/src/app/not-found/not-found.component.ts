import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<div align="center">
		<h1> Page not found! </h1>
		<br />
		<img src="/images/404.png" class="spacer" style="max-width: 100%" />
		<br />
		<a [routerLink]='["/"]' class="btn btn-primary spacer"> Go to Home page </a>
	</div>`,
})
export class NotFoundComponent { }
