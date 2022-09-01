import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesAddComponent } from './courses-add.component';
import { ButtonModule } from "../../../shared/components/button/button.module";
import { InputMinutesModule } from "../../../shared/components/input-minutes/input-minutes.module";
import { InputTextModule } from "../../../shared/components/input-text/input-text.module";
import { InputDateModule } from "../../../shared/components/input-date/input-date.module";
import { TextAreaModule } from "../../../shared/components/text-area/text-area.module";
import { DirectiveAndPipeModule } from "../../../shared/derective-and-pipe/directive-and-pipe.module";
import { BreadcrumbsModule } from "../../../shared/components/breadcrumbs/breadcrumbs.module";

@NgModule({
  declarations: [
    CoursesAddComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputMinutesModule,
    InputTextModule,
    InputDateModule,
    TextAreaModule,
    DirectiveAndPipeModule,
    BreadcrumbsModule
  ],
  exports: [
    CoursesAddComponent
  ]
})
export class CoursesAddModule { }
