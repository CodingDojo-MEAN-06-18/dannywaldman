import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  public weather : Weather;

  constructor(private _weather : WeatherService) { }

  ngOnInit() {
    this._weather.getWeather('san jose').subscribe( weather => this.weather = weather);
  }

}
