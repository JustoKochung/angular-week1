import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, name: 'Quote 1', description: '\"Kaffirs are as a rule uncivilised—the convicts even more so. They are troublesome, very dirty and live almost like animals\" by Mahatma Gandhi' },
    { id: 2, name: 'Quote 2', description: '\"Never trust a Jew! by Nikola Tesla\"' },
    { id: 3, name: 'Quote 3', description: '\"When a woman has scholarly inclinations there is usually something wrong with her sexual organs. by Friedrich Nietzsche\"' },
    { id: 4, name: 'Quote 4', description: '\“Educating a beautiful woman is like pouring honey into a fine Swiss watch: everything stops. by Kurt Vonnegut\”' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
