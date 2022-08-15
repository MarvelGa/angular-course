import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from "../../types/user.interface";
import {CourseInterface} from "../../types/course.interface";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit {
  @Input() coursesList: CourseInterface[] | undefined
  @Output() deleteCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  printInConsoleLog(value :string) {
    console.log(value);
  }

  trackByIds(index: number, course: CourseInterface):string  {
    return course.id;
  }

}
