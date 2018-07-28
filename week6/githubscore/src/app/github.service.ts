import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  getUser(user : string) : Observable<object> {
    return this._http.get(`https://api.github.com/users/${user}`);
  }
}
