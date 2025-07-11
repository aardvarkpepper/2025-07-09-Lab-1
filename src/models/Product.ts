interface DiscountableProduct {
  applyDiscount(discountAmount: number):void;
}

export class Product implements DiscountableProduct {
  sku: string;
  name: string;
  price: number;

  constructor (sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  displayDetails = ():void => {
    console.log(`${this.name} is priced at $${this.price} with SKU ${this.sku}.`);
  }
  getPriceWithTax = ():number => {
    return this.price;
  }
  applyDiscount = (discountAmount: number):void => {
    this.price = this.price - discountAmount;
  }
}

