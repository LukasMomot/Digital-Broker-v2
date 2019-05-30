import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private url = environment.production === true ? 'stocks' : 'http://localhost:5001';

  constructor(private httpClient: HttpClient) { }

  public getMostTraded(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.url}/mosttraded`);
  }

  public getStock(symbol: string): Observable<Stock> {
    return this.httpClient.get<Stock>(`${this.url}/stockprice/${symbol}`);
  }
}
