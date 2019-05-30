import { Component, OnInit, Input } from '@angular/core';
import { Stock } from '../shared/models/stock';

@Component({
  selector: 'stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  @Input() public stocks: Stock[];

  constructor() { }

  ngOnInit() {
  }

}
