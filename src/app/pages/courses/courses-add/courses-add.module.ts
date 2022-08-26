import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesAddComponent } from './courses-add.component';
import {CourseModule} from "../../../shared/course/course.module";
import {BreadcrumbsModule} from "../../../shared/breadcrumbs/breadcrumbs.module";

@NgModule({
  declarations: [
    CoursesAddComponent
  ],
  imports: [
    CommonModule,
    CourseModule,
    BreadcrumbsModule
  ],
  exports: [
    CoursesAddComponent
  ]
})
export class CoursesAddModule { }
