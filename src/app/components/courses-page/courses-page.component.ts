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
  trackByIds: any;
  constructor() { }

  ngOnInit(): void {
  }

}
