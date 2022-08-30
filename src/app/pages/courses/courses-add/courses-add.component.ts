import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { CourseInterface } from "../../../types/course.interface";
import { CourseService } from "../../../shared/services/course.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesAddComponent implements OnInit {
  nameForSubmitButton='Save';
  nameForResetButton='Cancel';
  courseTitle = '';
  courseDescription = '';
  courseDuration: any;
  courseDate: any;


  constructor(private courseService: CourseService,   private router: Router) {
  }

  ngOnInit(): void {
  }
  getTitle(title: string) {
    this.courseTitle = title;
  }

  getDescription(description: string) {
    this.courseDescription = description;
  }

  getDuration(duration: any) {
    this.courseDuration = duration;
  }

  getCourseDate(date: any) {
    this.courseDate = date;
  }


  submitEvent($event: any) {
   if (this.courseTitle===''|| this.courseDescription==='' || this.courseDate===undefined ||this.courseDuration===undefined ){
     alert('Please, fill in all fields');
     return;
   }
    this.getLastId();
    let newCourse = {} as CourseInterface;
    newCourse.id = (this.getLastId() + 1).toString();
    newCourse.title = this.courseTitle;
    newCourse.description = this.courseDescription;
    newCourse.creationDate = Date.parse(this.courseDate);
    newCourse.duration = this.courseDuration.toString();
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

  goToCourses(event: any) {
    this.router.navigateByUrl('/courses').then(()=>{
    });
  }
}
