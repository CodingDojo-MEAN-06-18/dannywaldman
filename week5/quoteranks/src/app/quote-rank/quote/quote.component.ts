import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent {
  @Input() quote : Quote;
  @Output() rankEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();
  constructor() { }

  up = () => {this.quote.rank++; this.sort()}
  down = () => {this.quote.rank--; this.sort()}

  sort = () => this.rankEvent.emit();
  remove = () => this.removeEvent.emit(this);

}
