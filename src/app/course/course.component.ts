import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "../shared/model/lesson";
import {CoursesHttpService} from "../services/course-http.service";
import {Course} from "../shared/model/course";
import {LessonsPagerService} from "../services/lessons-pager.service";
import {MessagesService} from "../services/messages.service";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  // for getting new instance within all-lessons template
  providers: [LessonsPagerService, MessagesService]
})
export class CourseComponent implements OnInit, OnDestroy {

  @Input()
  id: number;

  course$: Observable<Course>;
  lessons$: Observable<Lesson[]>;
  detail$: Observable<Lesson>;

  constructor(private coursesService: CoursesHttpService,
              private lessonPager: LessonsPagerService,
              private messagesService: MessagesService) {

  }

  ngOnInit() {
    // Stateless service (called each page loading)
    this.course$ = this.coursesService.findCourseById(this.id);
    this.lessons$ = this.lessonPager.lessonsPage$;
    this.lessonPager.loadFirstPage(this.id).
        subscribe(
          () => {},
          err => this.messagesService.error('error loading the first page')
        );
  }

  previousLessonsPage() {
    this.lessonPager.prev().
    subscribe(
      () => {},
      err => this.messagesService.error('error loading the previous page')
    );
  }

  nextLessonsPage() {
    this.lessonPager.next().
    subscribe(
      () => {},
      err => this.messagesService.error('error loading the next page')
    );
  }

  selectDetail(lesson: Lesson){
    this.detail$ = this.coursesService.findLessonDetailById(lesson.url);
  }

  backToMaster() {
    this.detail$ = undefined;
  }

  ngOnDestroy() {
    console.log('destroying CourseComponent ...');
  }

}
