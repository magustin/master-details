import { Component } from '@angular/core';
import { Product } from '../products';
import { Router } from '@angular/router';

// USING A SERVICE INSTEAD
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ ProductService]
})
export class ProductListComponent {


    products: Product[];

    constructor(productService: ProductService) {

        this.products = productService.getProducts();
    }
}