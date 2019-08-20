import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent } from 'src/home/home.component';
import{ MovieComponent } from 'src/movie/movie.component';
//import{ AboutComponent } from 'src/AboutUs/About.component';
//import{ Component } from 'src/AboutUs/About.component';
import{MovieDetailsComponent} from 'src/movie-details/movie-detail.component';
const routes: Routes = [


{path:'movies',component:MovieComponent},
{path:'home',component:HomeComponent},
{path:'movies/:id',component:MovieDetailsComponent},
//{path:'',component:HomeComponent,pathMatch:'full'},
//{path:'**',component:HomeComponent,pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
