import {Component, OnInit} from '@angular/core';
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {CoursesService} from "../services/courses.service";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  courses$: Observable<Course[]>;
  latestLessons$: Observable<Lesson[]>;

  constructor(private courseService: CoursesService) {

  }

  /*changeCourseData() {
    this.courses.forEach(course => course.description = '=>' + course.description);
  }*/

  ngOnInit() {

    this.courses$= this.courseService.getCourses();

    this.latestLessons$= this.courseService.fndLtstLesn();
  }

}
