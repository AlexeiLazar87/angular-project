import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {
  CommentComponent, CommentsComponent, HomeComponent, PostComponent, PostsComponent, UserComponent, UsersComponent
} from './components/';
import {CommentDetailsComponent, PostDetailsComponent, UserDetailsComponent} from './components';
import {DeactivatorService} from "./services";

let routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},
  {path: 'comments', component: CommentsComponent},
  {path: 'comments/:id', component: CommentDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
