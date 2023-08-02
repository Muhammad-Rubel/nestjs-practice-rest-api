import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getAllProducts(): Promise<any> {
    return await this.productsService.getAllProducts();
  }

  @Get(':id')
  async getProduct(@Param() params: any): Promise<any> {
    console.log('id', params.id);

    return await this.productsService.getProduct(params.id);
  }
}
