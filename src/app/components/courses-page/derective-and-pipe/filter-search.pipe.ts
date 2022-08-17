import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filterCourse'
})

export class FilterSearchPipe implements PipeTransform {
  private searchText: String | undefined;

  transform(value: any, ...args: any[]): any {
    this.searchText = args[0].trim().toLowerCase();
    if (value.length === 0 || this.searchText === '') {
      return value;
    }
    return value.filter((el: { title: any; }) => {
      return el.title.split(' ')[0].toLowerCase() === this.searchText;
    });
  }
}
