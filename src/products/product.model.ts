export class Product {
  constructor(
    public id: string, // automatically does `this.id = id`
    public title: string,
    public desc: string,
    public price: number
  ) {}
}