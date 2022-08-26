import {NgModule} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CoursesComponent} from "./courses.component";
import {CoursesAddComponent} from "./courses-add/courses-add.component";


const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'new-course', component: CoursesAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
