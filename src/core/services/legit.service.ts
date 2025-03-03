import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';

@Injectable()
export class LegitService {
  private readonly logger = new Logger(LegitService.name);

  constructor(private newsService: NewsService) {}

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitNg' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitNg' })
  async crawlLegitNg() {
    this.logger.debug('crawlLegitNg News Every 1 hour');
    // await this.newsService.crawlLegit();
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitPolitics' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitPolitics' })
  async crawlLegitPolitics() {
    this.logger.debug('crawlLegitPolitics News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/politics/',
      'politics',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitEntertainment' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitEntertainment' })
  async crawlLegitEntertainment() {
    this.logger.debug('crawlLegitEntertainment News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/entertainment/',
      'entertainment',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitEducation' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitEducation' })
  async crawlLegitEducation() {
    this.logger.debug('crawlLegitEducation News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/education/',
      'education',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitEconomy' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitEconomy' })
  async crawlLegitEconomy() {
    this.logger.debug('crawlLegitEconomy News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/business-economy/economy/',
      'economy',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitSports' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitSports' })
  async crawlLegitSports() {
    this.logger.debug('crawlLegitSports News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/sports/',
      'sports',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitWorld' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitWorld' })
  async crawlLegitWorld() {
    this.logger.debug('crawlLegitWorld News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/world/',
      'world',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitPeople' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitPeople' })
  async crawlLegitPeople() {
    this.logger.debug('crawlLegitPeople News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/people',
      'people',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitTechnology' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitTechnology' })
  async crawlLegitTechnology() {
    this.logger.debug('crawlLegitTechnology News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/business-economy/technology/',
      'technology',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlLegitBusiness' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitBusiness' })
  async crawlLegitBusiness() {
    this.logger.debug('crawlLegitBusiness News Every 1 hour');
    await this.newsService.crawlLegitByCategory(
      'https://www.legit.ng/business-economy/',
      'business',
    );
  }
}
