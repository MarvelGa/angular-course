import {Component, OnInit} from '@angular/core';
import {UserInterface} from "./types/user.interface";
import { CourseInterface} from "./types/course.interface";
import { CourseService } from "./services/course.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  coursesList: CourseInterface[] = [];
  isCoursesListNotEmpty: boolean | undefined ;

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.coursesList = this.courseService.getList() ;
    this.isCoursesListNotEmpty = this.courseService.getList().length>0;
  }

  deleteCourse(id: string) {
    console.log(`delete course this id=`, id);
    // this.coursesList = this.coursesList.filter(course=> course.id !==id);
  }

  editCourse(id: string) {
    console.log(`edit course this id=`, id);
  }

}
