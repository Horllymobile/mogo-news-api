import { NewsEntity } from 'src/news/entity/news.entity';
import { Repository } from 'typeorm';

export class NewsRepository extends Repository<NewsEntity> {}
