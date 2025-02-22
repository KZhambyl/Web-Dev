import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { NewAppComponent } from "./new-app/new-app.component";
// import { ProductsComponent } from "./products/products.component";

const routeConfig: Routes = [
    {
        path: '',
        component: NewAppComponent,
        title: 'Home page',
    },
    { 
        path: 'category/:id', 
        component: ProductListComponent,
        title: 'Category'
    },
];

export default routeConfig;