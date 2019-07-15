import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ): {id: string} {
    const id = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
    return { id };
  }

  @Get()
  getallProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id:string) {
    return this.productsService.getSingleProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id:string,
    @Body('title') title:string,
    @Body('desc') desc:string,
    @Body('price') price:number
  ) {
    this.productsService.updateProduct(id, title, desc, price);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id:string) {
    this.productsService.deleteProduct(id);
  }
}