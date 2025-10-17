import { Body, Controller, Post } from '@nestjs/common';
import { CheckSizeService } from './check-size.service';

@Controller('check-size')
export class CheckSizeController {
  constructor(private readonly checkSizeService: CheckSizeService) {}

  @Post()
  async checkSize(@Body() body: { items: string[] }) {
    if (!body?.items || !Array.isArray(body.items)) {
      return { error: 'Invalid body: expected { items: string[] }' };
    }

    const items = await this.checkSizeService.checkItems(body.items);

    return new Response(JSON.stringify({ items }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      status: 200,
    });
  }
}
