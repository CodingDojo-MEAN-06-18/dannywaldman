import { Component, OnInit } from '@angular/core';
import { User }  from '../models/user';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {
  users: Array<User>;

  constructor(private readonly _github: GithubService) {
    this._github.users.subscribe(users => this.users = users);
   }

  ngOnInit() {
    this._github.getUsers();
  }

}
