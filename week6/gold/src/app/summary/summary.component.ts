import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  logs : Array<string> = [];

  constructor(private _dataService : DataService) { }

  ngOnInit() {
    this.logs = this._dataService.logs;
  }

}
