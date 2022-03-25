import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _jsonURL = 'assets/product.json';
  constructor(private http: HttpClient) {
    
  }
    public getJSON(): Observable<any> {
      return this.http.get(this._jsonURL);

      
    }
}

