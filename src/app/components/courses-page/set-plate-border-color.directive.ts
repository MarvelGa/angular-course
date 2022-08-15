import {Directive, ElementRef, Input} from "@angular/core";

@Directive({
  selector: '[setBorderColor]'
})
export class SetPlateBorderColorDirective {
  private months: string[];

  constructor(private element: ElementRef) {
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  @Input() set setBorderColor(creationDate: String) {
    let numberOfDaysToMinus = 14;
    let parsedCreationDate: Date = this.parseDate(creationDate);
    let currentDate: Date = new Date();
    let dateMinusFourteenDays: Date = new Date(currentDate.getTime() - (1000 * 60 * 60 * 24 * numberOfDaysToMinus))

    if (parsedCreationDate < currentDate && parsedCreationDate >= dateMinusFourteenDays) {
      this.element.nativeElement.style.border = '1px solid green';
    } else if (parsedCreationDate > currentDate) {
      this.element.nativeElement.style.border = '1px solid blue';
    } else {
      this.element.nativeElement.style.border = 'none';
    }
  }

  parseDate(startDateCourse: String): Date {
    let dates: string[] = startDateCourse.replace(',', '').split(' ');
    let year: number = parseInt(dates[2]);
    let month: string = dates[1];
    let monthFullName = this.months.find(el => el.includes(month));
    let monthIndex = this.months.indexOf(`${monthFullName}`);
    let day: number = parseInt(dates[0]);
    return new Date(year, monthIndex, day);
  }
}
