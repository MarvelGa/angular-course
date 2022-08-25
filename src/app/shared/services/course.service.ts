import {Injectable} from "@angular/core";
import {CourseInterface} from "../../types/course.interface";
import { coursesList} from "../../../assets/fake-data";

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  coursesList: CourseInterface[] = [];

  constructor() {
    this.coursesList = coursesList;
  }

  getList(): CourseInterface[] {
    return this.coursesList;
  }

  createCourse(course: CourseInterface) {
    this.coursesList.push(course);
    return this.getList();
  }

  getItemById(id: string) {
    this.coursesList = this.coursesList.filter(el => el.id === id);
    return this.getList();
  }

  updateItem(course: CourseInterface) {
    this.coursesList = this.coursesList.map(elem => elem.id !== course.id ? elem : course);
    return this.getList();
  }

  removeItem(id: string) {
    this.coursesList = this.coursesList.filter(el => el.id !== id);
    return this.getList();
  }
}
