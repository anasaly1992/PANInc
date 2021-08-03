import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-side-menu-news',
  templateUrl: './side-menu-news.component.html',
  styleUrls: ['./side-menu-news.component.css']
})
export class SideMenuNewsComponent implements OnInit {
  articales:any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe(res =>{
      this.articales = res.articles
    })
  }

}
