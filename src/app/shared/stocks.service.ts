import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './models/stock';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  // private url = 'http://localhost:5001';

  private url = environment.backendUrl;

  constructor(private httpClient: HttpClient) { }

  public getMostTraded(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.url}/mosttraded`);
  }

  public getStock(symbol: string): Observable<Stock> {
    return this.httpClient.get<Stock>(`${this.url}/stockprice/${symbol}`);
  }
}
