import { Product } from '../models/Product.ts';

export const sortByPriceOrName = (productArray: Array<Product>, priceOrName: "price" | "name"): Array<Product> => {
  const sortedArray: Array<Product> = [];
  for (let i = 0; i < productArray.length; i++) {
    const sortedIndex = findIndexOf(sortedArray, priceOrName, productArray[i][priceOrName]);
    console.log(`Inserting at index ${sortedIndex}, ${productArray[i].name}`);
    if (sortedIndex === -1) {
      sortedArray.push(productArray[i])
    } else {
      sortedArray.splice(sortedIndex, 0, productArray[i]);
    }
  }
  return sortedArray;
}

const findIndexOf = (sortedArray: Array<Product>, priceOrName: "price" | "name", searchTerm: number | string): number => {
  let start = 0, end = sortedArray.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (sortedArray[mid][priceOrName] === searchTerm) {
      return mid;
    } else if (sortedArray[mid][priceOrName] < searchTerm) {
      start = mid + 1;
    } else if (sortedArray[mid][priceOrName] > searchTerm) {
      end = mid - 1;
    }
  }
  //return -1;
  return start;
}

// const findIndex = (searchTerm: number = 4, sortedArray: Array<number> = [0, 1, 2, 4, 5, 6, 8]): number => {
//   let start = 0, end = sortedArray.length - 1;
//   let mid;
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     console.log(`fI, ${start}, ${mid}, ${end}`);
//     if (sortedArray[mid] === searchTerm) {
//       return mid;
//     } else if (sortedArray[mid] < searchTerm) {
//       start = mid + 1;
//     } else if (sortedArray[mid] > searchTerm) {
//       end = mid - 1;
//     }
//   }
//   return end;
// }

// console.log(findIndex(3)); // -1
// console.log(findIndex(4)); //  3
// console.log(findIndex(0)); // 0
// console.log(findIndex(8)); // 6
// console.log(findIndex(9)); // -1
//console.log(findIndex(-1)); // -1