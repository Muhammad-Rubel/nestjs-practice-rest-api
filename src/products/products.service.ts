import { Injectable } from '@nestjs/common';
import { Product } from './product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from 'src/category/category.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getAllProducts(): Promise<any> {
    const _products = fetch('https://dummyjson.com/products');

    const prods = await _products;
    const products = await prods.json();

    // save products to mongodb
    products.products.forEach(async (product: any) => {
      // delete id property
      delete product.id;

      const newProduct = new this.productModel(product);

      try {
        await newProduct.save();
      } catch (error) {
        console.log('error', error);
      }
    });

    return products.products;
  }
}
