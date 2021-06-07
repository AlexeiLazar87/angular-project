import {Component, Input} from '@angular/core';
import {Post} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: Post;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
  }

  getCommentsOfPost() {
    this.router.navigate([this.post.id, 'comments'], {relativeTo: this.activatedRoute, state: this.post})
  }

}
