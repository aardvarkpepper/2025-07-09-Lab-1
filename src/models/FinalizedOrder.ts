import { PhysicalProduct } from './PhysicalProduct.ts';
import { Product } from './Product.ts';

type ProductWithQuantity = {product: Product | PhysicalProduct, quantity: number}

export class FinalizedOrder {
  inventory: ProductWithQuantity[];
  finalizedOrder: ProductWithQuantity[];
  constructor(inventory: ProductWithQuantity[], finalizedOrder: ProductWithQuantity[]) {
    this.inventory = inventory;
    this.finalizedOrder = finalizedOrder;
  }
  // Leaving out "sort" and such functions, I assume both inventories are sorted alphabetically by SKU, and do not have duplicate entries for a single product in either list.
  applyBulkDiscount = (): ProductWithQuantity[] | string => {
    let isOrderValid = true;
    let isBulkDiscountvalid = false;
    return "output";
  }
  isBulkDiscountvalid = (orderArray: ProductWithQuantity[]):boolean => {
    let qtyReqd = 10;
    let weightReqd = 100;
    if (orderArray[0] instanceof PhysicalProduct) { // physical products over certain qty or size
      // if undefined then falsy, which is fine.
      while (qtyReqd > 0 && weightReqd > 100) {
        for (let i = 0; i < orderArray.length; i++) {
          qtyReqd -= orderArray[i].quantity;
          if (orderArray[i] instanceof PhysicalProduct) {
            // weightReqd -= orderArray[i].product.weight;
          }
        }
      }


    } else {
      return false;
    }
    return true;
  }
}

//Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.
