import { Product } from './Product.ts';

export class DigitalProduct extends Product {
  fileSize: number;
  constructor (sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }
  getPriceWithTax = ():number => {
    return this.price;
  }
  getFileSize = ():string => {
    return `${this.fileSize} in megabytes`
  }
}