import { Component, OnInit } from '@angular/core';
import {Lesson} from "../shared/model/lesson";
import {store} from "../event-bus/app-data";
import {Observer} from "rxjs/Observer";


@Component({
  selector: 'my-lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})

export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit{
  closed: boolean;

  lessonsCounter = 0;

  ngOnInit() {
    console.log('lesson list component is registered as observer ..');
    store.lessonsList$.subscribe(this);
  }

  error(err: any) {
    console.error(err);
  }

  complete() {
    console.log('completed');
  }

  next(data: Lesson[]) {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  }

}
