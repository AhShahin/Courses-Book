///<reference path="../../../node_modules/@angular/router/src/interfaces.d.ts"/>

import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../shared/model/course";
import {Lesson} from "../shared/model/lesson";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {CoursesService} from "../services/courses.service";


@Injectable()
export class CourseDetailResolve implements Resolve<[Course, (Lesson[])]> {

  constructor(private coursesService: CoursesService){

  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<[Course, Lesson[]]> {

    return this.coursesService.fndCrsByURL(route.params['id'])
      .switchMap(course => this.coursesService.fndLsnForCrs(course.id),
        (course, lessons) => [course, lessons]);
  }


}
