import { Controller, Get, Req, Res } from '@nestjs/common';
import { ShopifyService } from './shopify.service';
import { Request, Response } from 'express';

@Controller('/auth')
export class ShopifyController {
  constructor(private readonly svc: ShopifyService) {}

  @Get('install')
  async install(@Req() req: Request, @Res() res: Response) {
    const shop = (req.query.shop as string) || '';
    if (!shop) return res.status(400).send('Missing shop param');
    const authRoute = await this.svc.shopify.auth.begin({
      shop,
      callbackPath: '/auth/callback',
      isOnline: false,
      rawRequest: req,
      rawResponse: res,
      scopes: this.svc.shopify.config.scopes,
    });
    return res.redirect(authRoute);
  }

  @Get('callback')
  async callback(@Req() req: Request, @Res() res: Response) {
    const { session } = await this.svc.shopify.auth.callback({
      rawRequest: req,
      rawResponse: res,
    });
    // TODO: persist session to DB
    // Register basic webhooks
    await this.svc.shopify.webhooks.register({
      session,
      legacy: false,
    });
    const host = (req.query.host as string) || Buffer.from(`${req.headers.host}`, 'utf8').toString('base64');
    return res.redirect(`/?shop=${session.shop}&host=${host}`);
  }

  @Get('/health')
  health() {
    return { ok: true };
  }
}
