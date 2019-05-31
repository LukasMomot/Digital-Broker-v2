import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../shared/models/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @Input() public stocks: Stock[];

  constructor(private readonly router: Router) { }

  ngOnInit() {
  }

  public buy(stock: Stock) {
    this.router.navigate(['/buy/', stock.symbol]);
  }

  public sell(stock: Stock) {
    console.log('You want to sell stock: ' + stock.name);
  }
}
