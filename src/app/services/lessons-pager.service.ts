import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Lesson} from "../shared/model/lesson";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Http} from "@angular/http";

@Injectable()
export class LessonsPagerService {

  private static readonly PAGE_SIZE = 2;
  // Implementing stateful(in memory) Observable (caching Lesson[]), avoid referencing it.
  private subject = new BehaviorSubject<Lesson[]>([]);
  lessonsPage$: Observable<Lesson[]> = this.subject.asObservable();
  currPgNum = 1;
  private coureId: number;

  constructor(private http: Http) { }


  loadFirstPage(crsId: number): Observable<any> {
    this.coureId = crsId;
    this.currPgNum = 1;
    return this.loadPage(this.currPgNum);
  }

  prev(): Observable<any> {
    if (this.currPgNum - 1 >= 1) {
      this.currPgNum -= 1;
      return this.loadPage(this.currPgNum);
    }
  }

  next(): Observable<any> {
    this.currPgNum += 1;
    return this.loadPage(this.currPgNum);
  }

  loadPage(pageNumber: number) {
    return this.http.get('/api/lessons', {
      params: {
        courseId: this.coureId,
        pageNumber,
        pageSize: LessonsPagerService.PAGE_SIZE
      }
    })
      .map(res => res.json().payload)
      .do(lessons => this.subject.next(lessons))
      .publishLast().refCount();
  }
}
