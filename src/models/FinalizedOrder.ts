import { PhysicalProduct } from './PhysicalProduct.ts';
import { Product } from './Product.ts';

type ProductWithQuantity = { product: Product | PhysicalProduct, quantity: number }

export class FinalizedOrder {
  inventory: ProductWithQuantity[];
  finalizedOrder: ProductWithQuantity[];
  constructor(inventory: ProductWithQuantity[], finalizedOrder: ProductWithQuantity[]) {
    this.inventory = inventory;
    this.finalizedOrder = finalizedOrder;
  }
  // Leaving out "sort" and such functions, I assume both inventories are sorted alphabetically by SKU, and do not have duplicate entries for a single product in either list.
  applyBulkDiscount = (): ProductWithQuantity[] | string => {
    if (!this.isOrderValid()) {
      return "Order quantity of one or more items exceeds quantities in stock.  Order not valid."
    }
    if (!this.isBulkDiscountValid) {
      return "The order does not meet the quantity or weight requirement for a bulk discount."
    }
    // logic to remove this.finalizedOrder quantities from this.inventory.
    return "Bulk discount has applied on item/quantities (fill in blank), (fill in blank) has been saved";
  }
  isBulkDiscountValid = (orderArray: ProductWithQuantity[]): boolean => {
    let qtyReqd = 10;
    let weightReqd = 100;
    if (orderArray[0].product instanceof PhysicalProduct) { // physical products over certain qty or size
      // if undefined then falsy, which is fine.
      for (let i = 0; i < orderArray.length; i++) {
        qtyReqd -= orderArray[i].quantity;
        weightReqd -= (orderArray[i].product as PhysicalProduct).weight;
      }
      if (qtyReqd < 0 || weightReqd < 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false; // if the product is not a PhysicalProduct, it cannot qualify for bulk discount.
    }
  }
  isOrderValid = (): boolean => {
    // Placeholder for function that checks for each element in this.finalizedOrder array, that quantity is less or equal to this.inventory quantities.  If not, there is not enough product on hand to fulfill the order.
    return true;
  }
}

//Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.
