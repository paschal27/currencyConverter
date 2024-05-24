import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertServiceService {

 
  constructor(private http: HttpClient) { }

  getCurrencyValue(currency: string) {
    debugger
    return this.http.get(`https://open.er-api.com/v6/latest/${currency}`)
  }
}
