import { NewsEntity } from '../entity/news.entity';
import { Repository } from 'typeorm';

export class NewsRepository extends Repository<NewsEntity> {}
