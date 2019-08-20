

import { Component,OnInit} from '@angular/core';
import{ IMovie } from './Movie';
@Component({
  selector:'movie',
  templateUrl: './movie.component.html'
//styleUrls:['./movie.component.css']
})
export class MovieComponent  implements  OnInit{

  constructor(){
 

 }
ngOnInit():void{

  this.movieName='DDL';
  console.log("At the InIt Phase"+this.movieName)
}
movieName:string=""
movTitle:string=""

movies:IMovie[]=[{

  
movieID:1,
movieName:"kgf",
movieGenre:"Action",
movieTitle:"topmovie",
movieRating:3

},
{
movieID:1,
movieName:"kabhi khushi kabhi ghum",
movieGenre:"emotions",
movieTitle:"topmovie",
movieRating:5
},

{
movieID:1,
movieName:"xmen",
movieGenre:"Action",
movieTitle:"topmovie",
movieRating:1.5
}



];

onRatingClicked(rate:string):void{
this.movTitle =rate;

}
}






//ngonInit():void{
//this.movieName='management';
//console.log("At the Init Phase!" +this.movieName);
 
//movieName :string="Roy";
 // imgWidth:number=800;
  //imgHeight:number=300;
//mymgnt():void{

//this.movieName='management'
//}



//}
