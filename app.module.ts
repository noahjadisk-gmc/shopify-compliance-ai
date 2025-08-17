import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShopifyModule } from './shopify/shopify.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ShopifyModule,
  ],
})
export class AppModule {}
