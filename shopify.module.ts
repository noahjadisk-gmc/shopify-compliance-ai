import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShopifyService } from './shopify.service';
import { ShopifyController } from './shopify.controller';

@Module({
  imports: [ConfigModule],
  providers: [ShopifyService],
  controllers: [ShopifyController],
  exports: [ShopifyService],
})
export class ShopifyModule {}
