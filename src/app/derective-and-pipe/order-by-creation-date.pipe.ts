import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'orderBy'
})

export class OrderByCreationDatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.sort((el1: any, el2: any) => {
      return el1.creationDate - el2.creationDate;
    })
  }
}
