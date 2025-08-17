import { Injectable } from '@nestjs/common';

@Injectable()
export class FooterLinksExecutor {
  // Idempotent stub — replace with GraphQL Menu API calls
  async apply(shop: string, links: { title: string; url: string; position?: number }[], dryRun = true) {
    if (dryRun) return { simulated: true, changes: links };
    // TODO: call Shopify GraphQL Admin API to upsert footer menu items
    return { applied: true, changes: links };
  }
}
