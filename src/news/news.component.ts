import {Component,OnInit} from '@angular/core';
import {NewsListService} from '../newslist.service';
@Component({
selector:'app-news',
templateUrl:'.news.componemnt.html',



})
export class NewsComponent implements OnInit{

    news:{};
    constructor(newslist:NewsListService){
    this.news=newslist:getNews();


    }


    ngOnInit(){

    }
}

