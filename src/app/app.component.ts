import {Component, OnInit} from '@angular/core';
import {UserInterface} from "./types/user.interface";
import {CourseInterface} from "./types/course.interface";
import {coursesList} from "../assets/fake-data"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  coursesList: CourseInterface[] = [];

  ngOnInit(): void {
    this.coursesList = coursesList;
  }

  deleteCourse(id: string) {
    console.log(`delete course this id=`, id);
    // this.coursesList = this.coursesList.filter(course=> course.id !==id);
  }

  editCourse(id: string) {
    console.log(`edit course this id=`, id);
  }

}
