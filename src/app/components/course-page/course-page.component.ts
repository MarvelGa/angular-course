import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courseDescription:string = '';
  duration: string = '';
  date: any;
  courseTitle: string='';

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(){
    console.log(this.courseDescription)
    console.log(typeof this.date)

  }

}
