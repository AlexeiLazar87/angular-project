import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPostsOfUser(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}?userId=${id}`);
  }

}
