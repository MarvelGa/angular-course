import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from "./section.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SectionComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SectionComponent
  ]
})
export class SectionModule { }
