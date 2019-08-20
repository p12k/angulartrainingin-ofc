import { Injectable } from "@angular/core"
import {IMovie} from './Movie'
@Injectable({

    providedIn:'root'
})

export class MovieService{

getMovies():IMovie[]{
return[
    {
 
movieID:1,
movieName:"kgf",
movieGenre:"Action",
movieTitle:"topmovie",
movieRating:3

    },
  {

movieID:1,
movieName:"kgf",
movieGenre:"Action",
movieTitle:"topmovie",
movieRating:3
   
  },
  {
 
movieID:1,
movieName:"kgf",
movieGenre:"Action",
movieTitle:"topmovie",
movieRating:3
}
];

}}

