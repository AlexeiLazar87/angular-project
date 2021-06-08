import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-details-from-state',
  templateUrl: './user-details-from-state.component.html',
  styleUrls: ['./user-details-from-state.component.css']
})
export class UserDetailsFromStateComponent implements OnInit {

  userFromState: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
     this.userFromState = this.router.getCurrentNavigation()?.extras.state;

    })

  }

  ngOnInit(): void {
  }

}
