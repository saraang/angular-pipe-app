import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let temp:string = ""

    for(var i = value.length-1; i>=0; i--)
      temp = temp + value[i]
    
    return temp;
  }

}