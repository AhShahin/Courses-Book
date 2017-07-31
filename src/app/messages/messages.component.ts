import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'my-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<string[]>;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$;
  }

  close() {
    // emit an empty list of errors
    this.messagesService.error();
  }

}
