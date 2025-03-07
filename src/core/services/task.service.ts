import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(
    private newsService: NewsService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'deleteNews' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'deleteNews' })
  async deleteNews() {
    this.logger.debug('deleteNews News Every 1 hour');
    await this.newsService.deleteNews();
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'deleteNews' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'clearCache' })
  async clearCache() {
    this.logger.debug('clearCache News Every 1 hour');
    await this.cacheManager.clear();
  }
}
