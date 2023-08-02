import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getHello(): string {
    return 'Hello World!';
  }

  async getCategories(): Promise<any> {
    const _categories = fetch('https://dummyjson.com/products/categories');

    const categories = await _categories;

    return await categories.json();
  }
}
