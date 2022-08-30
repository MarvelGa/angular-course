import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {CoursesComponent} from "./courses.component";
import {CoursesAddComponent} from "./courses-add/courses-add.component";
import {CoursesEditComponent} from "./courses-edit/courses-edit.component";

const routes: Routes = [
  {path: '', component: CoursesComponent},
  {path: 'new', component: CoursesAddComponent},
  {path: ':id', component: CoursesEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule {
}
