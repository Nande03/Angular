import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeUService {

  constructor(private _http:HttpClient) { }

  getData() {
    return this._http.get('https://fakestoreapi.com/products')
  }
}
