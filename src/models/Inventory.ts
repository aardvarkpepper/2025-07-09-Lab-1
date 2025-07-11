import { Product } from './Product.ts';

export class Inventory {
  inventory: {product: Product, quantity: number}[];
  constructor(inventory: {product: Product, quantity: number}[]) {
    this.inventory = inventory;
  }
  // Leaving out "sort" and such functions, I assume the inventory is sorted alphabetically by SKU.
}

