import {Component, Input} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {UserInterface} from "../../models";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input()
  userDetails: UserInterface

  constructor(private dataTransfer: DataTransferService) {
  }

  login() {
    this.dataTransfer.store.next(this.userDetails.username)
  }
}
