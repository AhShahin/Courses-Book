import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {CoursesService} from "../services/courses.service";
import {NewsletterService} from "../services/newsletter.service";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;

  constructor(private route: ActivatedRoute,
              //private courseService: CoursesService,
              //private userService: UserService
              ) {}

  ngOnInit() {

    // Using resolver for implementing container component(no services)
    this.course$ = this.route.data.map(data => data['detail'][0]);
    this.lessons$ = this.route.data.map(data => data['detail'][1]);

    // Using stateless pattern using Observable
    /*this.course$ = this.route.params
      .switchMap(params => this.courseService.fndCrsByURL(params['id']))
      .first()
      .publishLast().refCount();

    this.lessons$ = this.course$.switchMap(course => this.courseService.fndLsnForCrs(course.id))
                                .first()
                                .publishLast().refCount();*/

    // Using imperative pattern
    /*this.route.params
      .subscribe( params => {
        const courseUrl = params['id'];
        this.courseService.fndCrsByURL(courseUrl)
          .subscribe(data => {
            this.course = data;
            this.courseService.fndLsnForCrs(this.course.id)
              .subscribe(lessons => this.lessons = lessons);
          });

      });*/
  }

  /*loginAsJohn() {
    this.userService.login('john@gmail.com', 'test123').subscribe();
  }*/
}
