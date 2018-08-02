import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  public players: BehaviorSubject<any[]> = new BehaviorSubject([]);


  constructor(private _http: HttpClient) { }

  add(name: string, position: string) : void {
    this._http.post('/api/players', { name: name, position: position }).subscribe(
      data => {
        console.log('player added', data);
      },
      err => console.log(err)
    );
  }

  getPlayers() : void {
     this._http.get('/api/players').subscribe(
      data => this.players.next(data as any),
      error => console.log("Error getting players")
    )
  }

  deletePlayer(player : any) : void {
      this._http.delete(`/api/players/delete/${player._id}`).subscribe(
        data => this.getPlayers(),
        error => console.log(error)
      )
  }

  updateGameState(player : any, game : number, action : string) : void {
      this._http.put('/api/games', { player: player, game : game, action : action }).subscribe(
        data => this.getPlayers(),
        error => console.log(error)
      )
  }
}
