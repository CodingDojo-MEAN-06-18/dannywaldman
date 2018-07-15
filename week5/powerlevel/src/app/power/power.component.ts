import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  public level: number = 0;
  public test: number = 0;
  onChange = () => {this.test = this.level}
  ngOnInit = (): void => { }
}
