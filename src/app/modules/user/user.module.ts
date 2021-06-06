import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent,UserComponent } from './components/';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services";
import { UserWithPostsComponent } from './components/user-with-posts/user-with-posts.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserWithPostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
