import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'low'
})
export class LowPipe implements PipeTransform {

  transform(value: string, c: string): any {
    return value.toLowerCase() + c;
  }

}
