import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostRoutingModule} from './post-routing.module';
import {PostsComponent, PostComponent, PostWithCommentsComponent, PostWithCommentComponent} from './components';
import {HttpClientModule} from "@angular/common/http";
import {PostService, CommentService} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostWithCommentsComponent,
    PostWithCommentComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    CommentService
  ]
})
export class PostModule {
}
