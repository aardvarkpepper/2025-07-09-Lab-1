import { Product } from '../models/Product.ts';
// import { PhysicalProduct } from '../models/PhysicalProduct.ts';
// import { DigitalProduct } from '../models/DigitalProduct.ts';

export const calculateTax = (product: Product):number => {
  return product.getPriceWithTax();
}