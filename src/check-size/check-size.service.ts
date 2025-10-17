import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CheckSizeService {
  constructor(private readonly httpService: HttpService) {}

  async checkItems(urls: string[]) {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const response = await firstValueFrom(
            this.httpService.head(url, {
              timeout: 5000,
              maxRedirects: 3,
              validateStatus: () => true,
            }),
          );

          const sizeHeader = response.headers['content-length'];
          const size = sizeHeader ? parseInt(sizeHeader, 10) : null;

          return { url, size };
        } catch (err) {
          return { url, error: err.message };
        }
      }),
    );

    return results;
  }
}
