import { Component } from '@angular/core';
import {DataTransferService} from "./modules/posts/services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor() {

  }
}
