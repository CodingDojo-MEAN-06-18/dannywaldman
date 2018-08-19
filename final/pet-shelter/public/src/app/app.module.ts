import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as PetsComponentManager from './pets';

import * as ServiceManager from './services';

@NgModule({
  declarations: [
    AppComponent,
    ...PetsComponentManager.components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [...ServiceManager.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
