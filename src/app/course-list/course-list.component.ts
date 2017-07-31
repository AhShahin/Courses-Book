import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../shared/model/course";

@Component({
  selector: 'my-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input() courses: Course[];
  constructor() { }

  ngOnInit() {
  }

}
