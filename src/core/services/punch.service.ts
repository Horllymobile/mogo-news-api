import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from '../../news/service/news.service';

@Injectable()
export class PunchService {
  private readonly logger = new Logger(PunchService.name);

  constructor(private newsService: NewsService) {}

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunch' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunch' })
  async crawlPunch() {
    this.logger.debug('crawlPunch News Every 1 hour');
    // await this.newsService.crawlPunch();
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchPolitics' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchPolitics' })
  async crawlPunchPolitics() {
    this.logger.debug('crawlPunchPolitics News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/politics/',
      'politics',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchSports' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchSports' })
  async crawlPunchSports() {
    this.logger.debug('crawlPunchSports News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/sports/',
      'sports',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchBusiness' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchBusiness' })
  async crawlPunchBusiness() {
    this.logger.debug('crawlPunchBusiness News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/business/',
      'business',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchEntertainment' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchEntertainment' })
  async crawlPunchEntertainment() {
    this.logger.debug('crawlPunchEntertainment News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/entertainment/',
      'entertainment',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchEducation' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchEducation' })
  async crawlPunchEducation() {
    this.logger.debug('crawlPunchEducation News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/education/',
      'education',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchLifestyle' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchLifestyle' })
  async crawlPunchLifestyle() {
    this.logger.debug('crawlPunchLifestyle News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/lifestyle/',
      'lifestyle',
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPunchTechnology' })
  //   @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPunchTechnology' })
  async crawlPunchTechnology() {
    this.logger.debug('crawlPunchTechnology News Every 1 hour');
    await this.newsService.crawlPunchByCategory(
      'https://punchng.com/topics/technology/',
      'technology',
    );
  }
}
