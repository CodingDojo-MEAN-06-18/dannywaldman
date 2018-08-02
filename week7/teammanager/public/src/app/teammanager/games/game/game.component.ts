import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/team/players.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game: number = 0;
  players: any[] = [];

  constructor(private _activeRoute: ActivatedRoute, private _playerService: PlayersService) {
    this._playerService.getPlayers();
  }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      () => {
        this.game = parseInt(this._activeRoute.snapshot.params.id);
      },
      error => {
        console.log(error);
      }
    );

    this._playerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }

  onClick(player: any, action: string): void {
    this._playerService.updateGameState(player, this.game, action);
  }
}
