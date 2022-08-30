import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "../../../shared/components/button/button.module";
import { InputMinutesModule } from "../../../shared/components/input-minutes/input-minutes.module";
import { InputTextModule } from "../../../shared/components/input-text/input-text.module";
import { InputDateModule } from "../../../shared/components/input-date/input-date.module";
import { TextAreaModule } from "../../../shared/components/text-area/text-area.module";
import { CoursesEditComponent } from "./courses-edit.component";
import {DirectiveAndPipeModule} from "../../../shared/derective-and-pipe/directive-and-pipe.module";

@NgModule({
  declarations: [
    CoursesEditComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    ButtonModule,
    InputMinutesModule,
    InputTextModule,
    InputDateModule,
    TextAreaModule,
    DirectiveAndPipeModule
  ],
  exports:[
    CoursesEditComponent
  ]
})
export class CoursesEditModule { }
