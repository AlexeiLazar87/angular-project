import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentService} from "../../services/comment.service";
import {Comment} from "../../models/Comment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  comment: Comment;

  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentService.getComment(params.id).subscribe(value => this.comment = value);
    })
  }

}
