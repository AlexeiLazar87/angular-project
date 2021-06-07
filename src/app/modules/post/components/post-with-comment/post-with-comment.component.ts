import {Component, Input} from '@angular/core';
import {Comment} from "../../models";

@Component({
  selector: 'app-post-with-comment',
  templateUrl: './post-with-comment.component.html',
  styleUrls: ['./post-with-comment.component.css']
})
export class PostWithCommentComponent {

  @Input()
  comment: Comment;

}
