import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    CategoryModule,
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:Admin%402020@demo-database.683fj.mongodb.net/demo-data',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
