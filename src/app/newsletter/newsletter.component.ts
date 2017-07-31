import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {NewsletterService} from "../services/newsletter.service";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NewsletterComponent implements OnInit{

  firstName$:Observable<string>;

  ngOnInit() {
    this.firstName$ = this.userService.user$.map(
      user => user.firstName
    );
  }

  constructor(private newsletterService: NewsletterService,
              private userService: UserService){}

  subscribeToNewsletter(email) {
    this.newsletterService.subscribeToNewsletter(email.value)
      .subscribe(
        () => {
          email.value = '';
          alert('Subscription successful ...');
        },
        console.error
      );
  }
}
