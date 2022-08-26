import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from "./course.component";
import { DurationPipe } from "../derective-and-pipe/duration.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CourseComponent,
    DurationPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CourseComponent,
    DurationPipe
  ]
})
export class CourseModule { }
