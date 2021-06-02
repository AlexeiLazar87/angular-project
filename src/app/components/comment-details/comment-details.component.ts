import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {CommentService} from "../../services";
import {Comment} from "../../models";

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
