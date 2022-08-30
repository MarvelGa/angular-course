import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-minutes',
  templateUrl: './input-minutes.component.html',
  styleUrls: ['./input-minutes.component.css']
})
export class InputMinutesComponent implements OnInit {
  @Input() data: any;
  @Output() minutesEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  setData(value:any){
    this.data=value;
    this.minutesEvent.emit(this.data);
  }
}
