import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/service/news.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private newsService: NewsService) {}
  //
  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async deleteNews() {
    this.logger.debug('deleteNews News Every 1 hour');
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async crawlPunch() {
    this.logger.debug('crawlPunch News Every 1 hour');
    await this.newsService.crawlPunch();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async crawlLegitNg() {
    this.logger.debug('crawlLegitNg News Every 1 hour');
    await this.newsService.crawlLegit();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async crawlPulseNg() {
    this.logger.debug('crawlPulseNg News Every 1 hour');
    await this.newsService.crawlPulseNg();
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async crawlDailyPostNg() {
    this.logger.debug('crawlDailyPostNg News Every 1 hour');
  }

  // @Cron(CronExpression.EVERY_MINUTE)
  @Cron(CronExpression.EVERY_HOUR)
  async crawlSaharaReporters() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReporters();
  }
}
