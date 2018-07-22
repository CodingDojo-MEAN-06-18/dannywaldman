import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
  num : number = 0;
  constructor(private _dataService : DataService) { }

  ngOnInit() {
  }

  generate(){
    this.num = this._dataService.delta()
  }

}
