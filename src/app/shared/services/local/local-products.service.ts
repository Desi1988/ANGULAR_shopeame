import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalProductsService {

   productList = [];

  constructor() { }

  getProducts(){
    return this.productList;
  }


  addProducts(productList){
    for(const product of productList){
    this.productList.push(product);
    }
  }
}
