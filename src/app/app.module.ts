import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionComponent } from './components/section/section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import {SetPlateBorderColorDirective} from "./components/courses-page/derective-and-pipe/set-plate-border-color.directive";
import {DurationPipe} from "./components/courses-page/derective-and-pipe/duration.pipe";
import {TransformToDatetimePipe} from "./components/courses-page/derective-and-pipe/transform-to-datetime.pipe";
import {OrderByCreationDatePipe} from "./components/courses-page/derective-and-pipe/order-by-creation-date.pipe";
import {FilterSearchPipe} from "./components/courses-page/derective-and-pipe/filter-search.pipe";
import { CourseService } from "./services/course.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SectionComponent,
    CoursesPageComponent,
    FooterComponent,
    SetPlateBorderColorDirective,
    DurationPipe,
    TransformToDatetimePipe,
    OrderByCreationDatePipe,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
