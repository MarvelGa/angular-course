import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { MessageService } from "../../services/message.service";
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {
  @Output() newCourseRequiredEvent = new EventEmitter();
  isNewCourseRequired=false;
  searchValue: string = '';
  coursesTitle = "Courses";
  subscription: Subscription | undefined;


/*  constructor(private message: MessageService) {*/
  constructor(private message: MessageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.message.currentMessage.subscribe((searchValue: string) => this.searchValue = searchValue)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  printLog(): void{
    this.message.changeMessage(this.searchValue);
    console.log(this.searchValue);
  }

  printInConsoleLog(value:string) {
    console.log(value);
    this.isNewCourseRequired=true;
    this.newCourseRequiredEvent.emit(this.isNewCourseRequired);
    this.router.navigateByUrl('/new-course');
  }
}
