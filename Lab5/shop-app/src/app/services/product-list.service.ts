import { Injectable } from '@angular/core';
import { ProductList } from '../models/product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private productLists = [
    {
      "id": 0,
      "category": "Sport equipment",
      "image": "https://cdn-icons-png.flaticon.com/512/2270/2270989.png",
    },
    {
      "id": 1,
      "category": "Clothing",
      "image": "https://cdn-icons-png.flaticon.com/512/130/130302.png",
    },
    {
      "id": 2,
      "category": "Electronics",
      "image": "https://cdn-icons-png.flaticon.com/512/268/268962.png",
    },
    {
      "id": 3,
      "category": "Literature",
      "image": "https://cdn-icons-png.flaticon.com/512/792/792882.png",
    },
  ];

  constructor() { }

  getProductList(): ProductList[] {
    return this.productLists;
  }

  getProductListById(id: number): ProductList | undefined {
    return this.productLists.find((productList) => productList.id === id);
  }
}
