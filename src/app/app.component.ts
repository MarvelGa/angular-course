import { Component } from '@angular/core';
import {UserInterface} from "./types/user.interface";
import {CourseInterface} from "./types/course.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
