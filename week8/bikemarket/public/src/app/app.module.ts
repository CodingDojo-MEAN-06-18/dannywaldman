import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as services from './services';

import * as bikeComponents from './bikes';
import * as homeComponents from './home';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ...homeComponents.components,
    NavComponent,
    ...bikeComponents.components,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CookieModule.forRoot()
  ],
  providers: [...services.providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
