import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../models";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[];
  chosenUser: UserInterface;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

  catchUser(value: UserInterface) {
    this.chosenUser = value;
  }

}
