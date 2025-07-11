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

## Notes

Changed package.json from ? to "type": "module".
Changed tsconfig.json to   "allowImportingTsExtensions": true,  "noEmit": true,  