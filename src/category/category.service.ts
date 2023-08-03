import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCategories(): Promise<any> {
    const res = fetch('https://dummyjson.com/products/categories');

    const cats = await res;
    const categories = await cats.json();

    console.log('categories', categories.length);

    // save categories to mongodb
    categories.forEach(async (category: Category) => {
      const newCategory = new this.categoryModel({ name: category });

      try {
        await newCategory.save();
      } catch (error) {
        console.log('error', error);
      }
    });

    return categories;
  }
}
