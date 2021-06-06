import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
  }

  postsOfThisUser() {
    this.router.navigate([this.user.id, 'posts'], {relativeTo: this.activatedRoute, state: this.user})
  }

}
