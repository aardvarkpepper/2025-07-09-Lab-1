import { Product } from './models/Product.ts';
import { PhysicalProduct } from './models/PhysicalProduct.ts';
import { DigitalProduct } from './models/DigitalProduct.ts';
import { calculateTax } from './utils/taxCalculator.ts';

const hamsterPellets = new PhysicalProduct("skuHamsterPellets", "Hamster Pellets", 1.23, 0.5);
const digitalHamsterPellets = new DigitalProduct("skyDigitalHamsterPellets", "Digital Hamster Pellets", 0.10, 0.01);

const productArray: Array<Product> = [];
productArray.push(hamsterPellets);
productArray.push(digitalHamsterPellets);

for (let item of productArray) {
  item.displayDetails();
  console.log(`Has a final price of ${calculateTax(item)}`);
}