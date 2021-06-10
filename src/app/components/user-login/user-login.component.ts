import { Component } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  loginUser: string;

  constructor(private dataTransfer: DataTransferService) {
    this.dataTransfer.store.subscribe(value => this.loginUser = value)
  }

}
