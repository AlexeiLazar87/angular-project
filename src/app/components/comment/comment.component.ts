import {Component, Input} from '@angular/core';
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input()
  comment: Comment;

  constructor() {
  }

  goToCommentDetails(): void {
    console.log(this.comment);
  }
}

