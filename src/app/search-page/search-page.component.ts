import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onTermChanged(term: string) {
    console.log('Evenet recieved' + term);
  }

}
