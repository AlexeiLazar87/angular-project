import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {UserComponent, UsersComponent, UserWithPostComponent, UserWithPostsComponent} from './components/';
import {HttpClientModule} from "@angular/common/http";
import {UserService, PostService} from "./services";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserWithPostsComponent,
    UserWithPostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    PostService
  ]
})
export class UserModule {
}
