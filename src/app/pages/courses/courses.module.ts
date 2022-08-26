import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { FormsModule } from "@angular/forms";
import { TransformToDatetimePipe } from "../../shared/derective-and-pipe/transform-to-datetime.pipe";
import { OrderByCreationDatePipe } from "../../shared/derective-and-pipe/order-by-creation-date.pipe";
import { FilterSearchPipe } from "../../shared/derective-and-pipe/filter-search.pipe";
import { SetPlateBorderColorDirective } from "../../shared/derective-and-pipe/set-plate-border-color.directive";
import { SectionComponent } from "../../shared/section/section.component";
import { CourseModule } from "../../shared/course/course.module";
import { CoursesRoutingModule } from "./courses-routing.module";
import {BreadcrumbsModule} from "../../shared/breadcrumbs/breadcrumbs.module";
import {CoursesAddModule} from "./courses-add/courses-add.module";


@NgModule({
  declarations: [
    CoursesComponent,
    TransformToDatetimePipe,
    OrderByCreationDatePipe,
    FilterSearchPipe,
    SetPlateBorderColorDirective,
    SectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CourseModule,
    CoursesRoutingModule,
    BreadcrumbsModule,
    CoursesAddModule
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
