import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';

// USING A SERVICE INSTEAD
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

    public id: number;
    products: Product[];
    private sub: any;

    prodIdSnapshot: number;

    constructor(private productService: ProductService, private route: ActivatedRoute) {

        this.products = productService.getProducts();
    }

    ngOnInit() {
        
        this.sub = this.route.params.subscribe(params => {

            this.id = +params['id'];
        });
    }

    ngOnDestroy() {

        this.sub.unsubscribe();
    }
}