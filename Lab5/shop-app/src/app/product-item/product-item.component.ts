import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Component({
  selector: 'app-product-item',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="productItem.image"
        alt="Exterior photo of {{ productItem.name }}"
      />
      <h2 class="listing-heading"><a [href]="productItem.link" target="_blank">{{ productItem.name }}</a></h2>
      <p class="listing-location">
        <strong>Нравится</strong> {{ productItem.likes }} пользователям<br /><strong>Описание:</strong> {{ productItem.description }}
      </p>
      <div class="item-buttons">
        <button (click)="shareOnWhatsApp()">Поделиться в WhatsApp</button>
        <button id="like-button" (click)="likeProduct()">
          {{ productItem.liked ? 'Отменить лайк' : 'Нравится' }}
        </button>
        <button id="delete-button" (click)="deleteProduct.emit(productItem.id)">Удалить</button>
      </div>
    </section>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() productItem!: ProductItem;
  @Output() deleteProduct = new EventEmitter<number>();

  likeProduct() {
    if (this.productItem.liked) {
      this.productItem.likes -= 1;
    } else {
      this.productItem.likes += 1;
    }
    this.productItem.liked = !this.productItem.liked;
  }

  shareOnWhatsApp() {
    const text = `${this.productItem.name} ${this.productItem.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
