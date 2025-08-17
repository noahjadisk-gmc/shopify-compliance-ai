import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { shopifyApi, ApiVersion, Shopify } from '@shopify/shopify-api';

@Injectable()
export class ShopifyService {
  public shopify: Shopify;

  constructor(private readonly config: ConfigService) {
    this.shopify = shopifyApi({
      apiKey: this.config.get<string>('SHOPIFY_API_KEY')!,
      apiSecretKey: this.config.get<string>('SHOPIFY_API_SECRET')!,
      scopes: (this.config.get<string>('SCOPES') || '').split(',').map(s => s.trim()).filter(Boolean),
      apiVersion: (this.config.get<string>('SHOPIFY_API_VERSION') as ApiVersion) || ApiVersion.April25,
      hostName: (new URL(this.config.get<string>('APP_URL') || 'http://localhost:3000')).host,
      isEmbeddedApp: true,
    });
  }
}
