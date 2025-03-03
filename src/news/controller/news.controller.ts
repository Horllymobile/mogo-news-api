import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from '../service/news.service';

@Controller('api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/get-news')
  async getNews(@Query('category') category?: string) {
    const news = await this.newsService.getNews(category);
    return {
      data: news,
      message: 'List of latest news',
    };
  }
}
