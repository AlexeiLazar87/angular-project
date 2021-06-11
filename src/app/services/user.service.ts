import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface, UserInterface} from "../models";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(this.url)
  }

  getUserPosts(id: string): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url + '/' + id + '/posts')
  }
}
