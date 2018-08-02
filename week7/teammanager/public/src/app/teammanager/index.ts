import { GameComponent  } from './games/game/game.component';

import { AddPlayerComponent } from './players/add-player/add-player.component';
import {  ListPlayersComponent } from './players/list-players/list-players.component';
import { TeammanagerComponent } from './teammanager.component';

export const components: any[] = [
    GameComponent,
    AddPlayerComponent,
    ListPlayersComponent,
    TeammanagerComponent
];

export * from './games/game/game.component';
export * from './players/add-player/add-player.component';
export * from './players/list-players/list-players.component';
export * from './teammanager.component';

