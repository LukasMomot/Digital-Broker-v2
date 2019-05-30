import { StocksService } from '../shared/stocks.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from '../shared/models/stock';
import { first, map } from 'rxjs/operators';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public stocks: Stock[];
  constructor(private readonly stocksService: StocksService) { }

  ngOnInit() {
    this.stocksService.getMostTraded()
                    .pipe(first())
                    .subscribe(stocks => {
                      this.stocks = stocks;
                    });
  }

  public onTermChanged(term: string) {
    console.log('Evenet recieved' + term);
  }

}
