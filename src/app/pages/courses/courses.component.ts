import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from "../../shared/services/course.service";
import {CourseInterface} from "../../types/course.interface";
import {MessageService} from "../../shared/services/message.service";
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  title='Courses'
  courseId ='';
  noCoursesMessage = 'NO DATA, FEEL FREE TO ADD NEW COURSE';
  coursesList: CourseInterface[] = [];
  searchValue: String | undefined;
  subscription: Subscription | undefined;
  isCoursesListNotEmpty: boolean | undefined;

  constructor(private message: MessageService, private courseService: CourseService,
              private route: ActivatedRoute, private router: Router
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.message.currentMessage.subscribe(message => this.searchValue = message);
    this.coursesList = this.courseService.getList();
    this.isCoursesListNotEmpty = this.courseService.getList().length > 0;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  printInConsoleLog(value: string) {
    console.log(value);
  }

  trackByIds(index: number, course: CourseInterface): string {
    return course.id;
  }

  deleteCourse(id: string) {
    let question = 'Do you really want to delete this course?';
    if (confirm(question)) {
      this.coursesList = this.courseService.removeItem(id);
    }
  }

  editCourse(id: string) {
    console.log(`edit course this id=`, id);
    this.courseId=id;
    this.router.navigateByUrl(`courses/${id}`).then(()=>{
    });
  }
}
