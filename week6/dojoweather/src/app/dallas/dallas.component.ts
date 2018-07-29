import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  public weather : Weather;

  constructor(private _weather : WeatherService) { }

  ngOnInit() {
    this._weather.getWeather('dallas').subscribe( weather => this.weather = weather);
  }

}
