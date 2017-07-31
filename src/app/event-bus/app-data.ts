import * as _ from 'lodash';
import {Lesson} from "../shared/model/lesson";
import {Subject, Observable, Observer, BehaviorSubject} from 'rxjs';


class DataStore {

  private lessonsListSubj = new BehaviorSubject([]);

  public lessonsList$: Observable<Lesson[]> = this.lessonsListSubj.asObservable();

  initLessonList(newList: Lesson[]) {
    this.lessonsListSubj.next(_.cloneDeep(newList));
  }

  addLesson(newLesson: Lesson) {
    const lessons = this.cloneLessons();
    lessons.push(_.cloneDeep(newLesson));

    this.lessonsListSubj.next(lessons);
  }

  deleteLesson(deleted:Lesson) {
    const lessons = this.cloneLessons();
    _.remove(lessons,
      lesson => lesson.id === deleted.id );
    this.lessonsListSubj.next(lessons);
  }

  toggleLessonViewed(toggled:Lesson) {
    const lessons = this.cloneLessons();
    const lesson = _.find(lessons, lesson => lesson.id === toggled.id)
    lesson.completed = !lesson.completed;
    this.lessonsListSubj.next(lessons);
  }

  private cloneLessons() {
    return _.cloneDeep(this.lessonsListSubj.getValue());
  }
}

export const store = new DataStore();
