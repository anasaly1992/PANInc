import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { NewsComponent } from "./news/news/news.component";
import { NewsDetailsComponent } from "./news/news-details/news-details.component";



const routes: Routes = [
    {
        path: "",
        component: NewsComponent,
    },
    {
        path: "news-details",
        component: NewsDetailsComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }