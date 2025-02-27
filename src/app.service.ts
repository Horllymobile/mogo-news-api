import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './news/entity/news.entity';
import { NewsRepository } from './news/repository/news.repository';

@Injectable()
export class AppService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(NewsEntity) private newsRepo: NewsRepository,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
