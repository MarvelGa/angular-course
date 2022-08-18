import { Injectable } from "@angular/core";
import { CourseInterface } from "../types/course.interface";
import { coursesList} from "../../assets/fake-data";

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  coursesList: CourseInterface[] = [];


  constructor() {
   this.coursesList=coursesList;
  }

  getList(){
    return this.coursesList;
  }

  createCourse(){

  }

  getItemById(){

  }

  updateItem(){

  }

  removeItem(){

  }
}
