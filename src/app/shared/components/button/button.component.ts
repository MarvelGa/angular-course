import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() nameForSubmitButton: string | undefined;
  @Input() nameForResetButton: string | undefined;
  @Output() submitEvent = new EventEmitter();
  @Output() toCoursesListEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  goToCoursesList(){
    this.toCoursesListEvent.emit();
  }

  formSubmit() {
    this.submitEvent.emit();
  }

}
