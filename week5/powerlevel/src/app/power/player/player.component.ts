import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnChanges {
  @Input() level: number;
  @Input() type: string;

  ngOnChanges(): void {
    switch (this.type.toLowerCase().replace(/\s+/g, '')) {
      case 'sayian':
        this.level *= 10;
        break;
        case 'supersayian':
        this.level *= 90;
        break;
        case 'supersayiantwo':
        this.level *= 150;
        break;
        case 'supersayianthree':
        this.level *= 250;
        break;
        case 'supersayianfour':
        this.level *= 500;
        break;
    }
  }
}
