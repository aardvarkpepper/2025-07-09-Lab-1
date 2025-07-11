## Critical Thinking
After completing the lab, consider the following questions:

1.  How does TypeScript enforce type safety in this object-oriented program?

'npx tsc' at bash/terminal gives an error where Typescript detects type safety issues.  That said, it seems code may still be run despite violations of type safety using node, and I believe with HTML/CSS as well.

1.  How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Javascript class inheritance with 'extends' reduced code duplication for PhysicalProduct and DigitalProduct; this.references and this.methods written in the parent class work for the child class when super(parameters) is included in the constructor.

3.  What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

Private access variables and methods may only be used within the class; protected may be used in the class and descendants ('extends'); public may be used anywhere.  Encapsulation makes things less accessible, so less subject to accidental references or overwrites.

4.  If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

I'd say polymorphism doesn't make things straightforward; good ideation and execution do.  That said, SubscriptionProduct could be made a new class extending the Product class, super(parameters) could use the defined characteristics of the Product class for SubscriptionProduct including things such as price and SKU, and methods.

## Challenges

1.  Add a DiscountableProduct interface that includes a method applyDiscount(). Implement this interface in one of the product classes.

Done in Product class.


2.  Implement a module to handle sorting products by price or by name.

Done in utils/sort.ts.

3.  Add a new feature to the inventory system: bulk discounts for physical products over a certain quantity or size.

Done in models/FinalizedOrder.ts.  (Properly, quantity is not an inherent quality of a single product, so a 'Inventory' class was created that tracked stocks of items.  Similarly, aggregate 'size' (assumedly weight) is not an inherent property of a single item.  A 'FinalizedOrder' class was created to check ordered quantities versus on-hand items, then apply bulk discount if applicable.)

## Notes

Changed package.json from ? to "type": "module".
Changed tsconfig.json to   "allowImportingTsExtensions": true,  "noEmit": true,  

There was an issue with Typescript and union types.

type ProductWithQuantity = {product: Product | PhysicalProduct, quantity: number}
...
if (orderArray[0].product instanceof PhysicalProduct)
...
weightReqd -= orderArray[i].product.weight;

I believe TypeScript considers the last line an error as .weight references PhysicalProduct, but Typescript doesn't evaluate the "if" as a type guard.  A similar issue occured using .toFixed() on a number in class; for similar reasons (using a union earlier) Typescript considered it potentially a string, so considered .toFixed an error as .toFixed doesn't work on strings.

I think this probably happens whenever any data type uses a property that's defined on one union type but not other(s).



weightReqd -= (orderArray[i].product as PhysicalProduct).weight;