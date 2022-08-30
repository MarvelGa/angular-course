import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { FormsModule } from "@angular/forms";
import { TransformToDatetimePipe } from "../../shared/derective-and-pipe/transform-to-datetime.pipe";
import { OrderByCreationDatePipe } from "../../shared/derective-and-pipe/order-by-creation-date.pipe";
import { FilterSearchPipe } from "../../shared/derective-and-pipe/filter-search.pipe";
import { SetPlateBorderColorDirective } from "../../shared/derective-and-pipe/set-plate-border-color.directive";
import { CoursesRoutingModule } from "./courses-routing.module";
import { BreadcrumbsModule } from "../../shared/components/breadcrumbs/breadcrumbs.module";
import { CoursesAddModule } from "./courses-add/courses-add.module";
import { CoursesEditModule } from "./courses-edit/courses-edit.module";
import { DirectiveAndPipeModule } from "../../shared/derective-and-pipe/directive-and-pipe.module";
import { SectionModule } from "./section/section.module";

@NgModule({
  declarations: [
    CoursesComponent,
    TransformToDatetimePipe,
    OrderByCreationDatePipe,
    FilterSearchPipe,
    SetPlateBorderColorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    BreadcrumbsModule,
    CoursesAddModule,
    CoursesEditModule,
    DirectiveAndPipeModule,
    SectionModule
  ],
  exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
