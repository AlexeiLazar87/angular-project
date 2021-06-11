import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../models";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInterface[];
  myForm = new FormGroup({
    id: new FormControl(0)
  });

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value)
  }

}
