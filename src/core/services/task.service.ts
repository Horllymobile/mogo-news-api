import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private newsService: NewsService) {}
  //
  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'deleteNews' })
  async deleteNews() {
    this.logger.debug('deleteNews News Every 1 hour');
    await this.newsService.deleteNews();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunch' })
  async crawlPunch() {
    this.logger.debug('crawlPunch News Every 1 hour');
    await this.newsService.crawlPunch();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitNg' })
  async crawlLegitNg() {
    this.logger.debug('crawlLegitNg News Every 1 hour');
    await this.newsService.crawlLegit();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNg' })
  async crawlPulseNg() {
    this.logger.debug('crawlPulseNg News Every 1 hour');
    await this.newsService.crawlPulseNg();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlDailyPostNg' })
  async crawlDailyPostNg() {
    this.logger.debug('crawlDailyPostNg News Every 1 hour');
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReporters' })
  async crawlSaharaReporters() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReporters();
  }
}
