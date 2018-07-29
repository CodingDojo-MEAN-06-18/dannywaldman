import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  public weather : Weather;

  constructor(private _weather : WeatherService) { }

  ngOnInit() {
    this._weather.getWeather('burbank').subscribe( weather => this.weather = weather);
  }

}
