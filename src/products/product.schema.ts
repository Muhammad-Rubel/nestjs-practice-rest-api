import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/category/category.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discountPercentage: number;

  @Prop()
  rating: number;

  @Prop()
  stock: number;

  @Prop()
  brand: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  @Prop()
  category: string;

  @Prop()
  thumbnail: string;

  @Prop()
  images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
