import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../shared/model/user";
import {Http, Headers} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

export const UNKNOWN_USER: User = {
  firstName: 'Unknown'
};

@Injectable()
export class UserService {

  private subject = new BehaviorSubject(UNKNOWN_USER);
  user$: Observable<User> = this.subject.asObservable();

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<User> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/login', {email,password}, headers)
      .map(res => res.json())
      // emit user
      .do(user => this.subject.next(user))
      // To ensure that post method called only once
      .publishLast().refCount();
    // we subscribe here if we need to use the service directly in the temp
    /*.subscribe(
          user => this.subject.next(user),
        () => alert('Login Faild')
      );*/
  }
}
