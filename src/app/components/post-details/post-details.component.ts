import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Post} from "../../models";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  post: Post;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(value => this.post = value)
    })
  }
}
