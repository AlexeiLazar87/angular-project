import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserInterface} from "../../models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input()
  user: UserInterface;

  @Output()
  lift: EventEmitter<UserInterface> = new EventEmitter<UserInterface>()

  lifting(): void {
    this.lift.emit(this.user)
  }
}
