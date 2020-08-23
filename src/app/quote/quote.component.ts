import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Quote 1', '\"Kaffirs are as a rule uncivilised—the convicts even more so. They are troublesome, very dirty and live almost like animals\" by Mahatma Gandhi'),
    new Quote(2, 'Quote 2', '\"Never trust a Jew! by Nikola Tesla\"'),
    new Quote(3, 'Quote 3', '\"When a woman has scholarly inclinations there is usually something wrong with her sexual organs. by Friedrich Nietzsche\"'),
    new Quote(4, 'Quote 4', '\“Educating a beautiful woman is like pouring honey into a fine Swiss watch: everything stops. by Kurt Vonnegut\”'),
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
