import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'toDatetime'
})

export class TransformToDatetimePipe implements PipeTransform {
  private months: string[];

  constructor() {
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  transform(value: any, ...args: any[]): any {
    if (value!==undefined){
      let date = new Date(parseInt(value));
      let monthName = this.months[date.getMonth()].slice(0, 3);
      return `${date.getDate()} ${monthName}, ${date.getFullYear()}`
    }
  }

}
