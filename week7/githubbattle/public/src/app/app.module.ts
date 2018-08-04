import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { GithubService } from './services/github/github.service';
import { RankComponent } from './github/rank/rank.component';
import { StageComponent } from './github/battle/stage/stage.component';
import { GroundComponent } from './github/battle/ground/ground.component';
import { BattleComponent } from './github/battle/battle.component';
import { GituserComponent } from './github/gituser/gituser.component';

@NgModule({
  declarations: [
    AppComponent,
    RankComponent,
    StageComponent,
    GroundComponent,
    BattleComponent,
    GituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
