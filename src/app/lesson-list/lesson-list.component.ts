import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Lesson} from "../shared/model/lesson";

@Component({
  selector: 'my-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class lessonListComponent {

  @Input()
  lessons: Lesson[];

  @Output()
  selected = new EventEmitter<Lesson>();

  constructor() { }

  select(lesson:Lesson) {
    this.selected.next(lesson);
  }

}
