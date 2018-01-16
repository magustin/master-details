
// PRODUCT MODEL
export class Product {
    constructor(
        public id: number,
        public name: string,
        public type: string,
        public status: string,
        public price: number,
        public description: string
    ) {}    
}
export const PRODUCTS: Product[] = [
    { id: 1, name: 'Kapower Drill Driver', type: 'Power Tool', status: 'In stock', price: 99.00, description: '20-Volt Lithium-ion Cordless Drill Driver. LED light' },
    { id: 2, name: 'WazSUP Stand Up Paddle Board', type: 'Outdoor Sports Equipment', status: 'In stock', price: 975.00, description: '10ft in length, 60/40 rails hybrid stand up board. Excellent in surf or flat water conditions.' },
    { id: 3, name: 'Pole Benda Fishing Rod', type: 'Fishing Gear', status: 'Out of stock', price: 129.99, description: 'Graphite composite saltwater fishing rod. Stainless steel guides. Line capacity rings.' }
];