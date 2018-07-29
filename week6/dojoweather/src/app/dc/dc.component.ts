import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  public weather : Weather;

  constructor(private _weather : WeatherService) { }

  ngOnInit() {
    this._weather.getWeather('district of columbia').subscribe( weather => this.weather = weather);
  }

}
