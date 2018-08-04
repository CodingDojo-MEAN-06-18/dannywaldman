import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github/github.service';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
   user1 : User = new User();
   user2 : User = new User();

  constructor(private readonly _github : GithubService, private readonly _router: Router) { }

  ngOnInit() {
  }

  setUser(event: Event, player: number ) : void {
    event.preventDefault();
    let user = player === 1 ? this.user1 : this.user2;
    this._github.getUser(user.name).subscribe(data => {
      user.name = data['login'];
      user.picture = data['avatar_url'];
      user.score = (data['followers'] + data['public_repos']) * 12;
    });
  }

  battle() : void {
    this._github.battle(this.user1, this.user2);
    this._router.navigate(['github','battle','ground']);
  }

}
