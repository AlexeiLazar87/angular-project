import {Component} from '@angular/core';
import {Post} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";

@Component({
  selector: 'app-user-with-posts',
  templateUrl: './user-with-posts.component.html',
  styleUrls: ['./user-with-posts.component.css']
})
export class UserWithPostsComponent {

  posts: Post[];

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPostsOfUser(params.id).subscribe(value => {
        this.posts = value;
      })
    })
  }
}
