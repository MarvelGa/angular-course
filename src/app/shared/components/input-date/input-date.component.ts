import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css']
})
export class InputDateComponent implements OnInit {
  @Input() data: any;
  @Output() dateEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  setData(value:any){
    this.data=value;
    this.dateEvent.emit(this.data);
  }
}
