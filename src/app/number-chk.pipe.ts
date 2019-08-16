import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberChk'
})
export class NumberChkPipe implements PipeTransform {

  transform(value: any, args?: any): string {

    let retString:string = ""

    //Prime
    if(args == "Prime"){
      var count:number = 0 
      console.log("Prime")
      for(var i = 1; i<= value; i++){
        if(value % i == 0)
          count ++
      }
      if(count == 2){
        retString = "It is Prime Number"
      }else{
        retString = "It is Not Prime Number"
      }
    }

    //Perfect
    if(args == "Perfect"){

      var i:number = 1;
      var sum:number = 0;

      while(i<value){
        if(value % i == 0)
          sum=sum+i;
        i++;
      }
      if(sum == value)
        retString =  "Perfect Number"
      else
        retString =  "Not Perfect Number"

    }

    //Even
    if(args == "Even"){
      if(value % 2 == 0){
        retString = "Even Number"
      }else{
        retString = "Not Even Number"
      }

    }

    //Odd
    if(args == "Odd"){
      if(!(value % 2 == 0)){
        retString = "Odd Number"
      }else{
        retString = "Not Odd Number"
      }
    }

    return retString;
  }
}