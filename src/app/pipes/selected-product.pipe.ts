import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products';

@Pipe({
    
    name: 'selectedProduct'
})

export class SelectedProductPipe implements PipeTransform {

    transform(allProducts: Product[], productId: number): any {

        return allProducts.filter(p => p.id === productId);
    }
}