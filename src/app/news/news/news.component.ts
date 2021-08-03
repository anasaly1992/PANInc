import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  articales:any[] = [
    {
      source:'',
      urlToImage:''}
  ];
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor(
    private http: HttpClient,
    private newsService: NewsService,
    private router: Router
    ) { 

  }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((res:any) =>{
      this.articales = res.articles
    })
  }

  openArticaleDetails(articale:any) {
    this.newsService.articale = articale;
    this.router.navigate(['news-details'])
  }

}
