import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StocksService } from '../shared/stocks.service';
import { NgForm } from '@angular/forms';

interface BuyAndSellModel {
  name: string;
  symbol: string;
  currentPrice: number;
  limitOrder: number;
  amount: number;
}

@Component({
  selector: 'buy-and-sell-form',
  templateUrl: './buy-and-sell-form.component.html',
  styleUrls: ['./buy-and-sell-form.component.scss']
})
export class BuyAndSellFormComponent implements OnInit {

  public model: BuyAndSellModel = {
    name: '',
    symbol: '',
    currentPrice: 0,
    limitOrder: 0,
    amount: 10
  };

  constructor(private route: ActivatedRoute, private router: Router, private stocksService: StocksService) {
    this.route.params.subscribe((params) => {
      this.model.symbol = params.symbol;
    });
  }

  ngOnInit() {
    this.stocksService.getStock(this.model.symbol)
      .pipe(first())
      .subscribe((stock) => {
        this.model.currentPrice = stock.price;
        this.model.name = stock.name;
        this.model.limitOrder = +(stock.price * 1.02).toFixed(2);
      });
  }

  public submit(form: NgForm) {
    console.log(`Thank you for buying ${this.model.amount} ${this.model.symbol} stocks`);
    console.log(form);
    this.router.navigate(['/search-page']);
  }

  public cancel() {
    this.router.navigate(['/search-page']);
  }

}
