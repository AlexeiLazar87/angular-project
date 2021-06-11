import {Component, Input} from '@angular/core';
import {PostInterface} from "../../models";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {

  @Input()
  post: PostInterface;

}
