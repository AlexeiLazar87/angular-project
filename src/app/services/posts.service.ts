import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Resolve<Post[]> {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }

}
