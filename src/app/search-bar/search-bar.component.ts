import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public term = '';
  @Output() termChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public search() {
    console.log(this.term);
    this.termChanged.emit(this.term);
    this.term = '';
  }
}
