
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Meir Liraz', "“Look for opportunities in every change in your life.", new Date(2021, 8, 25)),
    new Quote(2, 'Gary Keller', "“Life is a question and how we live it is our answer.”", new Date(2021, 4, 11)),
    new Quote(3, 'William Arthur Ward', "“Persist while others are quitting.”", new Date(2021, 1, 12)),
    new Quote(4, 'Hal Elrod', "“Mornings contain the secret to an extraordinarily successful life.", new Date(2021, 8, 25)),
    new Quote(5, 'Paulo Braga', "“The desire to live a purposeful life, I truly believe, resides in all humans.”", new Date(2021, 4, 11)),
    new Quote(6, 'Janet Springer', "“Little decisions you make alter your life, but they rarely do so all at once.”", new Date(2021, 1, 12)),
  ];


  like(index) {
    this.quotes[index].like++;
  }

  unlike(index) {
    this.quotes[index].unlike++;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Thank you for viewing this Quote.Do you want to delete it. ${this.quotes[index].user}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}