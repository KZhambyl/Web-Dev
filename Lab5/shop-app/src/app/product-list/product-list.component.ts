import { Component, inject } from '@angular/core';
import { ProductItem } from '../models/product-item';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductList } from '../models/product-list';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  template: `
    <section class="category-name">{{productList?.category}}</section>
    <section class="products">
      <app-product-item
        *ngFor="let productItem of productItemList"
        [productItem]="productItem"
        (deleteProduct)="deleteProduct($event)"
      ></app-product-item>
    </section>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productItemList: ProductItem[] = [];
  productList: ProductList | undefined = undefined;
  categoryId = 0;
  private route: ActivatedRoute = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private productListService = inject(ProductListService);

  constructor() {
    this.categoryId = Number(this.route.snapshot.params['id']);
    this.productList = this.productListService.getProductListById(this.categoryId);
    this.productItemList = this.productService.getProductItems().filter(product => product.categoryId === this.categoryId);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.productItemList = this.productService.getProductItems().filter(product => product.categoryId === this.categoryId);
  }
}
