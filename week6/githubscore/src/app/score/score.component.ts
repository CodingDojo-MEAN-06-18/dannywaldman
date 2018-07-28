import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  user: object = {};
  score: number = -1;

  constructor(private _service: GithubService) { }

  ngOnInit() { }

  onSubmit(event: Event, user: string): void {
    event.preventDefault();
    this._service.getUser(user).subscribe(gitUser => {
      this.user = gitUser;
      this.score = gitUser['followers'] + gitUser['public_repos'];
    },
      error => this.user = {
        id: -1,
        login : user
      }
    );
  }

}
