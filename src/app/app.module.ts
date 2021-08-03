import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news/news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { SideMenuNewsComponent } from './news/news/side-menu-news/side-menu-news.component';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConversationComponent } from './news/news-details/conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailsComponent,
    HeaderComponent,
    SideMenuNewsComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
