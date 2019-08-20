import {IMovie} from './../movie/movie';
import {ActivatedRoute,Router} from '@angular/router';
import{OnInit,Component} from '@angular/core';
@Component({
templateUrl:'./movie-detail.component.html',
   

})
export class MovieDetailsComponent  {
    

pgtitle:string="Movie details";
movie:IMovie;
constructor(private route: ActivatedRoute ,private router:Router) {
    
};

ngOnInit(){
let id = +this.route.snapshot.paramMap.get('id');
this.pgtitle +=':${id}';
this.movie ={

 
'movieID':1,
'movieName':"kgf",
'movieGenre':"Action",
'movieTitle':"topmovie",
'movieRating':3

};
    
}
onBack():void{
this.router.navigate(['/Movie']);
}

}