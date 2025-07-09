import { Product } from './Product.ts';

export class PhysicalProduct extends Product {
  weight: number;
  constructor(sku: string, name: string, price: number, weight: number) {
    super (sku, name, price);
    this.weight = weight;
  }
  getPriceWithTax = (): number => {
    return (this.price * 1.1);
  }
  getWeightInKg = ():string => {
    return `${this.weight} kg`;
  }
}