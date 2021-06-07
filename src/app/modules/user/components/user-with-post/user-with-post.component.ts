import {Component, Input} from '@angular/core';
import {Post} from "../../models";

@Component({
  selector: 'app-user-with-post',
  templateUrl: './user-with-post.component.html',
  styleUrls: ['./user-with-post.component.css']
})
export class UserWithPostComponent {

  @Input()
  post: Post;

}
