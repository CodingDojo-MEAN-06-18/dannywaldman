import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  @Input() type : string;
  @Input() low : number;
  @Input() high : number;

  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  dig() : void {
    this._dataService.setGold(this.type, this.low, this.high);
  }

}
