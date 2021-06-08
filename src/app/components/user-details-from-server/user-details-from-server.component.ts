import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details-from-server',
  templateUrl: './user-details-from-server.component.html',
  styleUrls: ['./user-details-from-server.component.css']
})
export class UserDetailsFromServerComponent implements OnInit {

  userFromServer: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      let id = value.id;
      this.userService.getUserById(id).subscribe(userResponse => this.userFromServer = userResponse)
    })
  }

  ngOnInit(): void {
  }

}
