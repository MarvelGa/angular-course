import {Component, OnInit} from '@angular/core';
import {UserInterface} from "./types/user.interface";
import {CourseInterface} from "./types/course.interface";
import {CourseService} from "./services/course.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  coursesList: CourseInterface[] = [];
  isCoursesListNotEmpty: boolean | undefined;
  isUserAuthenticated = false;
  IsNewCourseRequired = false;
  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.coursesList = this.courseService.getList();
    this.isCoursesListNotEmpty = this.courseService.getList().length > 0;
  }

  deleteCourse(id: string) {
    let question = 'Do you really want to delete this course?';
     if (confirm(question)){
       this.coursesList = this.courseService.removeItem(id);
     }
  }

  editCourse(id: string) {
    console.log(`edit course this id=`, id);
  }

  authenticationRequest(isUserAuthenticated: boolean) {
    this.isUserAuthenticated =isUserAuthenticated;
  }

  setIsNewCourseRequired(IsNewCourseRequired: boolean){
    this.IsNewCourseRequired=IsNewCourseRequired;
  }
}
