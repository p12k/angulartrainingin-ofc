import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpClientModulepp } from './app-routing.module';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MovieComponent } from '../movie/movie.component';
import {HomeComponent } from '../home/home.component';
import {FormsModule } from '@angular/forms';
import {PowerPipe } from '../share/transform-spaces.pipe';
import { MovieDetailsComponent } from '../movie-details/movie-detail.component';
import {MovieRating } from '../share/rating.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    PowerPipe,
    HomeComponent,
    MovieDetailsComponent,MovieRating
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
