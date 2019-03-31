import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseModel, Common, User } from '../../app.interfaces';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public errors: string[];
  public towns$: Common[];
  public user$: User;
  public sendEmail: boolean = false;

  public townId: number;
  public address: string;
  public phoneNumber: string;

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
        this.townId = r.user.townId;
        this.address = r.user.address;
        this.phoneNumber = r.user.phoneNumber;
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
    this.http.post<ResponseModel>('/profile/editinfo',
      {
        townId: this.townId,
        address: this.address,
        phoneNumber: this.phoneNumber,
        id: this.user$.id,
      }).subscribe(r => {
        this.errors = r.errors;
      })
  }
}
