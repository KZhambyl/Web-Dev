import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from '../models/product-list';
import { RouterModule } from '@angular/router';
import { ProductListService } from '../services/product-list.service';

@Component({
  selector: 'app-new-app',
  imports: [CommonModule, RouterModule],
  templateUrl: './new-app.component.html',
  styleUrl: './new-app.component.css'
})
export class NewAppComponent {
  private productListService = inject(ProductListService);
  productLists: ProductList[] = this.productListService.getProductList();
}
