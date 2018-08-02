import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/team/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  positions: Array<string> = [
    "Pitcher",
    "Catcher",
    "First",
    "Second",
    "Third",
    "Short",
    "Left",
    "Right",
    "Center"
  ];
  name: string = "";
  position: string = "";

  constructor(private _playerService : PlayersService, private _router : Router) { }

  ngOnInit() {
  }

  onSubmit(event : Event) : void {
    event.preventDefault();
    this._playerService.add(this.name, this.position);
    this._router.navigate(['players']);
  }

}
