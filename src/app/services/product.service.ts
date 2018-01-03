import { Injectable } from '@angular/core';

import { PRODUCTS } from '../products';

// EXAMPLE OF A SERVICE DEPENDENCY
import { Logger } from './logger.service';

@Injectable()

export class ProductService {

    constructor(private logger: Logger) {}

    getProducts() {

        this.logger.log('Getting Products');
        return PRODUCTS;
    }
}
