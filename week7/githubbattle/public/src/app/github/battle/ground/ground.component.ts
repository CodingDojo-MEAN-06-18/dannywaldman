import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github/github.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.css']
})
export class GroundComponent implements OnInit {
  winner: User = this._gitHub.winner;
  looser: User = this._gitHub.looser;

  constructor(private readonly _gitHub: GithubService, private readonly _route: Router) { }

  ngOnInit() {
  }

  reset(): void {
    this._gitHub.winner = this._gitHub.looser = new User();
    this._route.navigate(['/']);
  }

}
