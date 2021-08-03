import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  articale:any;

  constructor(private http: HttpClient) { }
  getAllNews() {
   return this.http.get<any>('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4')
  }
}
