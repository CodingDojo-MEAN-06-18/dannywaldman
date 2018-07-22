import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import { SummaryComponent } from './summary/summary.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
