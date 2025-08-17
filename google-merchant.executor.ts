import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMerchantExecutor {
  async verifySite(shop: string, method: 'meta_tag' | 'html_file' | 'dns_txt' = 'meta_tag', dryRun = true) {
    if (dryRun) return { simulated: true, method };
    // TODO: Write meta-tag to theme or host verification file
    return { verified: true, method };
  }
  async syncShipping(shop: string, dryRun = true) {
    if (dryRun) return { simulated: true };
    // TODO: Sync shipping via Google Content API
    return { synced: true };
  }
  async pushFeed(shop: string, dryRun = true) {
    if (dryRun) return { simulated: true };
    // TODO: Generate and push product feed
    return { pushed: true };
  }
}
