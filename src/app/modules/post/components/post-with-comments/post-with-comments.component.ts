import {Component} from '@angular/core';
import {Comment} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../services";

@Component({
  selector: 'app-post-with-comments',
  templateUrl: './post-with-comments.component.html',
  styleUrls: ['./post-with-comments.component.css']
})
export class PostWithCommentsComponent {

  comments: Comment[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
      this.activatedRoute.params.subscribe(params => {
        this.commentService.getCommentsOfPost(params.id).subscribe(value => {
          this.comments = value;
        })
      })
  }
}

