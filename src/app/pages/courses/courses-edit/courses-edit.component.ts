import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CourseService} from "../../../shared/services/course.service";
import {ActivatedRoute, Router} from '@angular/router';
import {CourseInterface} from "../../../types/course.interface";

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesEditComponent implements OnInit {
  courseTitle = '';
  courseDescription = '';
  courseDuration: any;
  courseDate: any;
  nameForSubmitButton = 'Edit';
  nameForResetButton = 'Cansel';
  foundItem: any;
  id: number = 0;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private courseService: CourseService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (typeof id === "string") {
      this.id = parseInt(id);
    }
    this.foundItem = this.courseService.getItemById(this.id.toString());
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

  submitEvent(event: any) {
    let course: CourseInterface;
    course = {
      id: this.id.toString(),
      title: this.courseTitle == '' ? this.foundItem.title : this.courseTitle,
      description: this.courseDescription == '' ? this.foundItem.description : this.courseDescription,
      duration: this.courseDuration === undefined ? this.foundItem.duration : this.courseDuration,
      creationDate: this.courseDate === undefined ? this.foundItem.courseDate : new Date(this.courseDate).getTime(),
      topRated: false
    };
    this.courseService.updateItem(course);
    alert(`The ${course.title} course has been successfully edited`);
    this.router.navigateByUrl("courses").then(() => {
    });
  }

  goToCourses(event: any) {
    this.router.navigateByUrl('/courses').then(() => {
    });
  }

  setData(creationDate: any) {
    console.log(parseInt(creationDate))
    let date = new Date(creationDate);
    let month = (date.getMonth()+1).toString();
    let day = (date.getDate()).toString();
    console.log(day);
    month= month.length===1?'0'+ month: month;
    day= day.length===1?'0'+ day: day;
    console.log(`${date.getFullYear()}-${day}-${month}`);
    return `${date.getFullYear()}-${month}-${day}`;
  }
}
