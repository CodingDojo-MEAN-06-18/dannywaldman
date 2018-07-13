import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  dt = null;
  zone = null;

  setZone = (zone: string) => {this.dt = Date.now(); this.zone = zone;}
  clear = () => this.zone = this.dt = null;
}
