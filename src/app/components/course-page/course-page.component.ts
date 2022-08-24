import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {CourseInterface} from "../../types/course.interface";

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent implements OnInit {
  courseDescription: string = '';
  duration: string = '';
  date: any;
  courseTitle: string = '';

  constructor(private courseService: CourseService) {
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
  }

  getLastId(): number {
    let sortedList = this.courseService.getList().sort((el1, el2) => parseInt(el1.id) - parseInt(el2.id));
    let lastElement = sortedList.slice(-1);
    return parseInt(lastElement[0].id);
  }

  submitAndGoToMainPage(){
  }
  goToMainPageWithOutSaving(){
  }

}
