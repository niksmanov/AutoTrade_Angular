import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common, User } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  errors: string[];
  towns$: Common[];
  user$: User;
  sendEmail: boolean = false;

  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.commonService.getTowns();
    this.store.select(fromRoot.getCommonState)
      .subscribe(common => {
        this.towns$ = common.towns;
      });

    this.store.select(fromRoot.getUserState)
      .subscribe(r => {
        this.user$ = r.user;
      });
  }

  reSendEmail() {
    this.http.get<ResponseModel>(`/user/resendconfirmationemail?id=${this.user$.id}`)
      .subscribe(r => {
        if (r.errors.length > 0) {
          this.errors = r.errors;
          this.sendEmail = true;
        }
      })
  }

  onSubmit() {
    this.http.post<ResponseModel>('/profile/editinfo', this.user$)
      .subscribe(r => {
        this.errors = r.errors;
      })
  }
}
