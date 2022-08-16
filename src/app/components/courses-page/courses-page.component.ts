import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { UserInterface } from "../../types/user.interface";
import { CourseInterface } from "../../types/course.interface";
import { MessageService } from "../../MessageService/message.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})

export class CoursesPageComponent implements OnInit, OnDestroy {
  @Input() coursesList: CourseInterface[] | undefined
  @Input() isCoursesListNotEmpty: boolean | undefined
  @Output() deleteCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();

  noCoursesMessage='NO DATA, FEEL FREE TO ADD NEW COURSE';

  searchValue: String | undefined;
  subscription: Subscription | undefined;

  constructor(private message: MessageService) {
  }

  ngOnInit(): void {
    this.subscription = this.message.currentMessage.subscribe(message => this.searchValue = message)
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  printInConsoleLog(value :string) {
    console.log(value);
  }

  trackByIds(index: number, course: CourseInterface):string  {
    return course.id;
  }

}
