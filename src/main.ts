import { Product } from './models/Product.ts';
import { PhysicalProduct } from './models/PhysicalProduct.ts';
import { DigitalProduct } from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';
import { sortByPriceOrName } from './utils/sort.ts';
import { Inventory } from './models/Inventory.ts';

const apple = new PhysicalProduct("skuApple", "Apple", 3, 0.5);
const banana = new PhysicalProduct("skuBanana", "Banana", 2, 0.4);
const chupacabra = new DigitalProduct("skuChupacabra", "Chupacabra", -1, 0.3);

const productArray: Array<Product> = [];
productArray.push(apple);
productArray.push(banana);
productArray.push(chupacabra);

console.log("=========");
for (let item of productArray) {
  item.displayDetails();
  console.log(`Has a final price of $${calculateTax(item)}`);
  console.log("=========");
}

console.log(sortByPriceOrName(productArray, "name"));
console.log(sortByPriceOrName(productArray, "price"));


