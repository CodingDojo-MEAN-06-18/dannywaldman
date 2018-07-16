import { Component } from '@angular/core';
import { Quote } from './quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-rank',
  templateUrl: './quote-rank.component.html',
  styleUrls: ['./quote-rank.component.css']
})
export class QuoteRankComponent {
  quotes: Array<Quote> = [];
  current_quote: Quote = new Quote();
  constructor() { }
  onSubmit = (event: Event, form: NgForm) => {
    event.preventDefault();
    this.current_quote.id = this.quotes.length + 1;
    this.quotes.push(this.current_quote);
    this.current_quote = new Quote();
    form.reset();
    this.sort();
  };
  sort = () => this.quotes.sort((a, b) => b.rank - a.rank);
  remove = (quote : Quote) => this.quotes = this.quotes.filter((item)=> item.id != quote.id);
}
