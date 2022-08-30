import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {MessageService} from "../../../shared/services/message.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {
  @Output() newCourseRequiredEvent = new EventEmitter();
  searchValue: string = '';
  subscription: Subscription | undefined;
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
    this.router.navigateByUrl('courses/new').then(()=>{
    });
  }
}
