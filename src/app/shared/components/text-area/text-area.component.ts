import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  @Input() text: string = '';
  @Output() textEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setText(text: string): void {
    this.text = text;
    this.textEvent.emit(this.text);
  /*  this.text='';*/
  }
}
