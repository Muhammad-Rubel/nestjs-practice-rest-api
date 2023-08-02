import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ProductsService {
  async getAllProducts(): Promise<any> {
    const _products = fetch('https://dummyjson.com/products');

    const prods = await _products;
    const products = await prods.json();

    // create a file in the root of the project called products.json and copy the contents of the products array into it
    fs.writeFileSync('products.json', JSON.stringify(products));

    return products;
  }

  async getProduct(id: string): Promise<any> {
    const _product = fetch(`https://dummyjson.com/products/${id}`);

    const product = await _product;

    return await product.json();
  }
}
