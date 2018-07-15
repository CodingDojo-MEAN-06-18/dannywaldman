import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input() level: number;
  ngOnChanges(): void {
    console.log('change');
  }

  ngOnInit = (): void => { }
}
