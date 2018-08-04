import { RankComponent } from './rank/rank.component';

import { StageComponent } from './battle/stage/stage.component';
import { GroundComponent } from './battle/ground/ground.component';
import { BattleComponent } from './battle/battle.component';

export const components: any[] = [
  RankComponent,
  StageComponent,
  GroundComponent,
  BattleComponent
];

export * from './rank/rank.component';
export * from './battle/stage/stage.component';
export * from './battle/ground/ground.component';
export * from './battle/battle.component';

