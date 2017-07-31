import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserEveComponent } from './browser-eve/browser-eve.component';
import { EventBusComponent } from './event-bus/event-bus.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {routerConfig} from "./router.config";
import {firebaseConfig} from "../environments/firebase.config";
import {RouterModule} from "@angular/router";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {CoursesService} from "./services/courses.service";
import { CourseListComponent } from './course-list/course-list.component';
import {lessonListComponent} from './lesson-list/lesson-list.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';
import {NewsletterService} from "./services/newsletter.service";
import { CourseDetailHeaderComponent } from './course-detail-header/course-detail-header.component';
import {UserService} from "./services/user.service";
import { AllLessonsComponent } from './all-lessons/all-lessons.component';
import { CourseComponent } from './course/course.component';
import {LessonsPagerService} from "./services/lessons-pager.service";
import {CoursesHttpService} from "./services/course-http.service";
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import {SafeUrlPipe} from "./shared/pipes/safe-url.pipe";
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from "./services/messages.service";
import {CourseDetailResolve} from "./course-detail/course-detail.resolver";
import { LoadingComponent } from './loading/loading.component';
import { CreateLessonComponent } from './create-lesson/create-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEveComponent,
    EventBusComponent,
    LessonsCounterComponent,
    HomeComponent,
    CourseDetailComponent,
    CourseListComponent,
    lessonListComponent,
    TopMenuComponent,
    NewsletterComponent,
    LoginComponent,
    CourseDetailHeaderComponent,
    AllLessonsComponent,
    CourseComponent,
    LessonDetailComponent,
    SafeUrlPipe,
    MessagesComponent,
    LoadingComponent,
    CreateLessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService,
    NewsletterService,
    UserService,
    LessonsPagerService,
    CoursesHttpService,
    MessagesService,
    CourseDetailResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
