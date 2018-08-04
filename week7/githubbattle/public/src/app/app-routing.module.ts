import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Github from './github';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'github',
  },
  {
    path: 'github',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'battle'
      },
      {
        path: 'battle',
        component: Github.BattleComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'stage'
          },
          {
            path: 'stage',
            component: Github.StageComponent
          },
          {
            path: 'ground',
            component: Github.GroundComponent,
          }
        ]
      },
      {
        path: 'rank',
        component: Github.RankComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
