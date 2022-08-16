import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[setBorderColor]'
})
export class SetPlateBorderColorDirective {
  constructor(private element: ElementRef) {
  }

  @Input() set setBorderColor(creationDate: any) {
    let numberOfDaysToMinus = 14;
    let currentDate: Date = new Date();
    let parsedCreationDate = new Date(parseInt(creationDate));
    let dateMinusFourteenDays: Date = new Date(currentDate.getTime() - (1000 * 60 * 60 * 24 * numberOfDaysToMinus))
    if (parsedCreationDate < currentDate && parsedCreationDate >= dateMinusFourteenDays) {
      this.element.nativeElement.style.border = '1px solid green';
    } else if (parsedCreationDate > currentDate) {
      this.element.nativeElement.style.border = '1px solid blue';
    } else {
      this.element.nativeElement.style.border = 'none';
    }
  }
}
