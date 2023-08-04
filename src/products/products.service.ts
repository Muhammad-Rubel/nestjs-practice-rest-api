import { HttpException, Injectable } from '@nestjs/common';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<any> {
    try {
      const _products = fetch('https://dummyjson.com/products');

      const prods = await _products;
      const products = await prods.json();

      // save products to mongodb
      products.products.forEach(async (product: any) => {
        // delete id property
        delete product.id;

        const newProduct = new this.productModel(product);

        await newProduct.save();
      });

      return products.products;
    } catch (err) {
      throw new HttpException('Error', 500);
    }
  }
}
