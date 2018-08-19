import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as PetsComponentManager from './pets';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pets'
  },
  {
    path: 'pets',
    component: PetsComponentManager.PetsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      },
      {
        path: 'list',
        component: PetsComponentManager.ListComponent
      },
      {
        path: 'new',
        component: PetsComponentManager.NewComponent
      },
      {
        path: ':id',
        component: PetsComponentManager.ShowComponent
      },
      {
        path: ':id/edit',
        component: PetsComponentManager.EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
