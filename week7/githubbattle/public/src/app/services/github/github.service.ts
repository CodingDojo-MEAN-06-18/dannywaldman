import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../../app/github/models/user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  winner: User;
  looser: User;
  users: BehaviorSubject<Array<User>> = new BehaviorSubject([]);

  constructor(private readonly _http: HttpClient) { }

  getUser(user: string): any {
    return this._http.get(`https://api.github.com/users/${user}`);
  }

  battle(user1: User, user2: User): any {
    if(user1.score > user2.score){
      this.winner = user1;
      this.looser = user2;
    } else {
      this.winner = user2;
      this.winner = user1;
    }

    return this._http.post('/github/battle', { user1: user1, user2: user2 }).subscribe(()=>{});
  }

  getUsers() : void {
    this._http.get('/github/fetch').subscribe(
      data => this.users.next(data as Array<User>),
      err => console.log(err)
    );
  }
}
