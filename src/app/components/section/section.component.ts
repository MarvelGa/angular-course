import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  searchValue: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  setSearchValue(newSearchValue: string): void {
    this.searchValue = newSearchValue;
  }

  printLog(): void{
    console.log(this.searchValue);
  }

  printInConsoleLog(value:string) {
    console.log(value);
  }
}
