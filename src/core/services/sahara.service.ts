import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';

@Injectable()
export class SaharaService {
  private readonly logger = new Logger(SaharaService.name);

  constructor(private newsService: NewsService) {}

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlSaharaReporters' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReporters' })
  async crawlSaharaReporters() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReporters();
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlSaharaReportersPolitics' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReportersPolitics' })
  async crawlSaharaReportersPolitics() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReportersByCategory(
      'https://saharareporters.com/articles?f%5B0%5D=article_topics%3A12',
      'politics',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlSaharaReportersSports' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReportersPolitics' })
  async crawlSaharaReportersSports() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReportersByCategory(
      'https://saharareporters.com/articles?f%5B0%5D=article_topics%3A14',
      'sports',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, {
  //   name: 'crawlSaharaReportersEntertainment',
  // })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReportersPolitics' })
  async crawlSaharaReportersEntertainment() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReportersByCategory(
      'https://saharareporters.com/articles?f%5B0%5D=article_topics%3A15',
      'entertainment',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlSaharaReportersEducation' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReportersPolitics' })
  async crawlSaharaReportersEducation() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReportersByCategory(
      'https://saharareporters.com/articles?f%5B0%5D=article_topics%3A33256',
      'education',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlSaharaReportersLifestyle' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlSaharaReportersPolitics' })
  async crawlSaharaReportersLifestyle() {
    this.logger.debug('crawlSaharaReporters News Every 1 hour');
    await this.newsService.crawlSaharaReportersByCategory(
      'https://saharareporters.com/articles?f%5B0%5D=article_topics%3A16',
      'lifestyle',
    );
  }
}
