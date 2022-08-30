import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(minutes: string, ...args: any[]): any {
    let hour: number = Math.floor(parseInt(minutes) / 60);
    let minute: number = parseInt(minutes) % 60;
    return hour >= 1 ? `${hour}h ${minute} min` : `${minute} min`;
  }
}
