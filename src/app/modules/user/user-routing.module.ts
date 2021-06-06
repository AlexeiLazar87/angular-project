import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent, UserWithPostsComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {path: ':id/posts', component: UserWithPostsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
