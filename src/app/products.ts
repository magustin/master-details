
// PRODUCT MODEL
export class Product {

    constructor(

        public id: number,
        public status: string,
        public type: string,
        public customer: string
    ) {}    
}

export const PRODUCTS: Product[] = [
    { id: 1, status: 'pending', type: 'loan', customer: 'Target Stores'},
    { id: 2, status: 'working', type: 'fmv', customer: 'Talon Logistics, Inc.'},
    { id: 3, status: 'working', type: 'loan', customer: 'Walmart'},
];
