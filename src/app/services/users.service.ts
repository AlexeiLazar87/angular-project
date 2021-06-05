import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements Resolve<User[]> {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  resolve(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url)
  }

}
