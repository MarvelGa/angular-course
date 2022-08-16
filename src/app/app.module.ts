import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { SectionComponent } from './components/section/section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule} from '@angular/forms';
import {SetPlateBorderColorDirective} from "./components/courses-page/set-plate-border-color.directive";
import {DurationPipe} from "./components/courses-page/duration.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SectionComponent,
    CoursesPageComponent,
    FooterComponent,
    SetPlateBorderColorDirective,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
