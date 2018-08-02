import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/team/players.service';
import { ModalDirective } from '../../../../../node_modules/ngx-bootstrap';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {
  players: any[] = [];
  current: any = {};

  constructor(private _playerService : PlayersService) {
    this._playerService.getPlayers();
   }

  ngOnInit() {
    this._playerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }

  openModal(player : any, modal : ModalDirective ) : void {
    event.preventDefault();
    this.current = player;
    modal.show();
  }

  deletePlayer(modal : ModalDirective) : void {
    this._playerService.deletePlayer(this.current);
    modal.hide();
  }

}
