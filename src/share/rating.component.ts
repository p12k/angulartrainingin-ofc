import{Input,Component,EventEmitter,Output}from '@angular/core';
//import{ComponentFactory} from '@angular/core';
  
 
@Component({
  selector:'mov-rating',
  templateUrl: './rating.component.html',
styleUrls:['./rating.component.css']
})
  export class MovieRating{   

@Input() rating :number;
    startWidth:number;
@Output() ratingClick:EventEmitter<string> =new EventEmitter<string>();

ngOnChanges():void{

    this.startWidth = + this.rating *75/5;
}
onClick():void{
 this .ratingClick.emit(`the movie rating${this.rating}is clicked`);
}
}