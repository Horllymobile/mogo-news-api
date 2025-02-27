import { Controller, Get } from '@nestjs/common';
import { NewsService } from '../service/news.service';

@Controller('api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/get-news')
  async getNews() {
    const news = await this.newsService.getNews();
    return {
      data: news,
      message: 'List of latest news',
    };
  }
}
