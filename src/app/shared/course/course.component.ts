import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CourseInterface} from "../../types/course.interface";
import {CourseService} from "../services/course.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnInit {
  courseDescription: string = '';
  duration: string = '';
  date: any;
  courseTitle: string = '';

  constructor(private courseService: CourseService,   private router: Router) {
  }

  ngOnInit(): void {
  }

  addCourse() {
    this.getLastId();
    let newCourse = {} as CourseInterface;
    newCourse.id = (this.getLastId() + 1).toString();
    newCourse.title = this.courseTitle;
    newCourse.description = this.courseDescription;
    newCourse.creationDate = Date.parse(this.date);
    newCourse.duration = this.duration.toString();
    this.courseService.createCourse(newCourse);
    console.log(this.courseService.getList());
    alert(`The new ${newCourse.title} course has been successfully added`);
    this.router.navigateByUrl('/courses').then(()=>{
    });
  }

  getLastId(): number {
    let sortedList = this.courseService.getList().sort((el1, el2) => parseInt(el1.id) - parseInt(el2.id));
    let lastElement = sortedList.slice(-1);
    return parseInt(lastElement[0].id);
  }

  goToMainPageWithOutSaving(){
    this.router.navigateByUrl('/courses').then(()=>{
    });
  }
}
