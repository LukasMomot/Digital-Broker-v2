import { Component, OnInit } from '@angular/core';
import { Stock } from '../shared/models/stock';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public stocks: Stock[];
  constructor() { }

  ngOnInit() {
    this.stocks = [
      {
        name: 'BMW',
        price: 67.23,
        symbol: 'BMW.DE'
      },
      {
        name: 'Lufthansa',
        price: 20.43,
        symbol: 'LHA.DE'
      },
      {
        name: 'Apple Inc.',
        price: 180.34,
        symbol: 'LHA.DE'
      },
    ];
  }

  public onTermChanged(term: string) {
    console.log('Evenet recieved' + term);
  }

}
