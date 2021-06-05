import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {
  PostComponent,
  PostDetailsComponent,
  PostsComponent,
  UserComponent,
  UserDetailsComponent,
  UsersComponent
} from './components/';
import {RouterModule, Routes} from "@angular/router";
import {PostsService, UsersService} from "./services";
import {HttpClientModule} from "@angular/common/http";

let routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {data: UsersService},
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {data: PostsService},
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
