import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent, PostWithCommentsComponent} from "./components";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    children: [
      {path: ':id/comments', component: PostWithCommentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
