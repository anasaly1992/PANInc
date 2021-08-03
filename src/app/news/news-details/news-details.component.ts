import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  articale:any;
  showCommentTextArea:boolean = false;
  addedComment:any;
  comments:any = [
    {
      img: '../../../assets/male-default-avatar-profile-gray-260nw-387037984.jpg',
      name: 'Olya',
      date: '03-08-2021',
      comment:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
  
   },
    
  ];

  constructor(private newsService: NewsService) { 
    this.articale = this.newsService.articale
    
  }

  ngOnInit(): void {
    console.log(this.newsService.articale)
  }
  addComment(addedComment:HTMLTextAreaElement) {
    this.showCommentTextArea = !this.showCommentTextArea;
  }
  submitComment(addedComment:HTMLTextAreaElement) {
  console.log(addedComment.value)
  this.comments.push({
    img: '../../../assets/male-default-avatar-profile-gray-260nw-387037984.jpg',
    name: 'Olya',
    date: '03-08-2021',
    comment:addedComment.value
  })
  }

}
