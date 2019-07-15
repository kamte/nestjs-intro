import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from './product.model';
@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number): string {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, desc, price);
    this.products.push(newProduct);

    return id;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getSingleProduct(id: string): Product {
    return {...this.findProduct(id)[0]};
  }

  updateProduct(id: string, title: string, desc: string, price: number) {
    const [product, index] = this.findProduct(id);
    const updated = {...product};
    if (title) updated.title = title;
    if (desc) updated.desc = desc;
    if (price) updated.price = price;
    this.products[index] = updated;
  }

  deleteProduct(id: string) {
    const index = this.findProduct(id)[1];
    this.products.splice(index, 1);
  }

  private findProduct(id: string): [Product, number] {
    const productIndex = this.products.findIndex(el => el.id === id);
    const product = this.products[productIndex];
    if (!product) {
      throw new NotFoundException('could not find product')
    }
    return [product, productIndex];
  }
}