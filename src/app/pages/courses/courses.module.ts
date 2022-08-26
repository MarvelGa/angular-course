import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import {FormsModule} from "@angular/forms";
import {DurationPipe} from "../../shared/derective-and-pipe/duration.pipe";
import {TransformToDatetimePipe} from "../../shared/derective-and-pipe/transform-to-datetime.pipe";
import {OrderByCreationDatePipe} from "../../shared/derective-and-pipe/order-by-creation-date.pipe";
import {FilterSearchPipe} from "../../shared/derective-and-pipe/filter-search.pipe";
import {SetPlateBorderColorDirective} from "../../shared/derective-and-pipe/set-plate-border-color.directive";
import { BreadcrumbsComponent } from "../../shared/breadcrumbs/breadcrumbs.component";
import {SectionComponent} from "../../shared/section/section.component";


@NgModule({
  declarations: [
    CoursesComponent,
    DurationPipe,
    TransformToDatetimePipe,
    OrderByCreationDatePipe,
    FilterSearchPipe,
    SetPlateBorderColorDirective,
    BreadcrumbsComponent,
    SectionComponent
    /*    AuthenticationDirective,
        NewCourseDirective*/
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    CoursesComponent,
    DurationPipe
  ]
})
export class CoursesModule { }
