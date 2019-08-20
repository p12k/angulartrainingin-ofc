import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsListService {

news =[
{id:1,title:'news title 1',description:'this is news description 1'},
{id:2,title:'news title 1',description:'this is news description 2'},
{id:3,title:'news title 1',description:'this is news description 3'},


];



  constructor() {}
    
    getNews(){

      return this.news;
    }
  }

