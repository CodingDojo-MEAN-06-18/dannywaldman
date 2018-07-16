import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteRankComponent } from './quote-rank/quote-rank.component';
import { QuoteComponent } from './quote-rank/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteRankComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
