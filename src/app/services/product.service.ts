import { Injectable } from '@angular/core';

import { PRODUCTS } from '../products';

@Injectable()

export class ProductService {

    constructor() {}

    getProducts() {

        return PRODUCTS;
    }
}
