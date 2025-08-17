import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
  // Placeholder scoring logic
  computeComplianceScore(input: { policies: string[]; cookies: boolean; dsar: boolean }): { score: number; reasons: string[] } {
    let score = 50;
    const reasons: string[] = [];
    if (input.policies.length >= 3) { score += 20; reasons.push('Has core policies'); }
    if (input.cookies) { score += 10; reasons.push('Cookie consent present'); }
    if (input.dsar) { score += 20; reasons.push('DSAR supported'); }
    if (score > 100) score = 100;
    return { score, reasons };
  }
}
