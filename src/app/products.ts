
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
    { id: 1, name: 'Medavac Survival Kit', type: 'Camping Gear', status: 'In stock', price: 14.99, description: 'Comes in a waterproof case. Includes fire starter, compass, wire saw, emergency whistle, can opener, suture thread and needle, bandages and more!' },
    { id: 2, name: 'WazSUP Stand Up Paddle Board', type: 'Outdoor Sports Equipment', status: 'In stock', price: 975.00, description: '10ft in length, 60/40 rails hybrid stand up board. Excellent in surf or flat water conditions.' },
    { id: 3, name: 'Pole Benda Fishing Rod', type: 'Fishing Gear', status: 'Out of stock', price: 129.99, description: 'Graphite composite saltwater fishing rod. 12ft. in length. Stainless steel guides. Line capacity rings.' },
    { id: 4, name: 'The Great Outdoors Dome Tent', type: 'Camping Equipment', status: 'In stock', price: 300.00, description: '2-person capacity. Strong, waterproof, and easy to assemble. Made of durable extra-strength nylon.' },
    { id: 5, name: 'KalusTum Conventional Reel', type: 'Fishing Gear', status: 'In stock', price: 47.98, description: 'Reinforced anodized aluminum spool. Precision brass gears. Stainless steel parts for superior corrosion protection.' },
    { id: 6, name: 'ClearBlue Dive Mask', type: 'Diving Gear', status: 'On Order', price: 96.00, description: 'Single lens mask with excellent field of view. Silicone skirt for an improved fit. Fog resistant. Shatterproof.' }
];