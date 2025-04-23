import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProduct(){
    return [
      {name: "iphone 15", category: "mobile", price: "80000"},
      {name: "McBook", category: "laptop", price: "120000"},
      {name: "iPad Air", category: "ipad", price: "100000"}
    ]
  }
  productList(){
    const url = "https://dummyjson.com/products";
    return this.http.get(url)
  }
}
