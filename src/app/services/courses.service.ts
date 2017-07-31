import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Course} from "../shared/model/course";
import {Observable} from "rxjs/Observable";
import {Lesson} from "../shared/model/lesson";


@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  getCourses(): Observable<Course[]> {
    return this.db.list('courses')
      //short live (data not updated upon changing in the db )
      .first()
      .do(console.log);
  }

  fndLtstLesn(): Observable<Lesson[]> {
    return this.db.list('lessons', {
      query: {
        orderByKey: true,
        limitToLast: 10
      }
    })
      .take(1)
      .do(console.log);
  }

  fndCrsByURL(courseUrl: string):Observable<Course> {
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .first()
      .map( data => data[0])
  }

  fndLsnForCrs(crsId: string): Observable<Lesson[]> {
    return  this.db.list('lessons', {
      query: {
        orderByChild: 'courseId',
        equalTo: crsId
      }
    }).first();
  }
}
