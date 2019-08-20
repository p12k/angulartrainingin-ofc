
import {Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'PipePower'
})

export class PowerPipe implements PipeTransform{

transform(value:number,power:number):number{
//transform(value:number):number{
   return value*power;

}

}