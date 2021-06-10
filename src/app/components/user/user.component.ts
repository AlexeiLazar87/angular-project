import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserInterface} from "../../models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserInterface;

  @Output()
  lift: EventEmitter<UserInterface> = new EventEmitter<UserInterface>()

  constructor() { }

  ngOnInit(): void {
  }

  lifting(): void {
    this.lift.emit(this.user)
  }
}
