import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
 @Input() text: string = '';
 @Output() textEvent = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  setText(text: string): void {
    this.text = text;
    this.textEvent.emit(this.text);
/*    this.text='';*/
  }


}
