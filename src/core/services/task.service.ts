import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private newsService: NewsService) {}

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'deleteNews' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'deleteNews' })
  async deleteNews() {
    this.logger.debug('deleteNews News Every 1 hour');
    // await this.newsService.deleteNews();
  }
}
