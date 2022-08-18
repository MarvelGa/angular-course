import {Component, OnDestroy, OnInit } from '@angular/core';
import {MessageService} from "../../services/message.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit, OnDestroy {
  searchValue: string = '';
  coursesTitle = "Courses";
  subscription: Subscription | undefined;

  constructor(private message: MessageService) {
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
  }
}
