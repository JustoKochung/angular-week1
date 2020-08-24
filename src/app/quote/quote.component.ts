import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, '\"Kaffirs are as a rule uncivilised—the convicts even more so. They are troublesome, very dirty and live almost like animals\"', 'Mahatma Gandhi', 'Justo', new Date(2020, 10, 4), 0, 0),
    new Quote(2, '\"Never trust a Jew!\"', 'Nikola Tesla', 'Kelvin', new Date(2021, 10, 6), 0, 0),
    new Quote(3, '\"When a woman has scholarly inclinations there is usually something wrong with her sexual organs.\"', 'Friedrich Nietzsche', 'Domnick', new Date(2018, 10, 5), 0, 0),
    new Quote(4, '\“Educating a beautiful woman is like pouring honey into a fine Swiss watch: everything stops.\”', 'Kurt Vonnegut', 'Mercy', new Date(2020, 7, 8), 0, 0),
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
