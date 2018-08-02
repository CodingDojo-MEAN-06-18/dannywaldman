import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayersService }  from './teammanager/services/team/players.service';

import { GameComponent } from './teammanager/games/game/game.component';
import { AddPlayerComponent } from './teammanager/players/add-player/add-player.component';
import { ListPlayersComponent } from './teammanager/players/list-players/list-players.component';
import { TeammanagerComponent } from './teammanager/teammanager.component';

import { ModalModule} from '../../node_modules/ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AddPlayerComponent,
    ListPlayersComponent,
    TeammanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
