import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { CommentsComponent, CommentComponent } from './components/';
import {CommentService} from "./services";

@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
