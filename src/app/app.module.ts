import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {CourseComponent} from './shared/course/course.component';
import {CoursesModule} from "./pages/courses/courses.module";
import {AuthenticationDirective} from "./shared/derective-and-pipe/authentication.directive";
import {FormsModule} from "@angular/forms";
import {LoginModule} from "./pages/login/login.module";
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthenticationDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CoursesModule,
    FormsModule,
    LoginModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
