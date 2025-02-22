import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo1.jpg" alt="logo" aria-hidden="true" />
          <h2>Shop application</h2>
        </header>
      </a>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop-app';
}
