import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NewsService } from 'src/news/service/news.service';

@Injectable()
export class PulseService {
  private readonly logger = new Logger(PulseService.name);

  constructor(private newsService: NewsService) {}

  //   @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNg' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlLegitNg' })
  async crawlPulseNg() {
    this.logger.debug('crawlPulseNg News Every 1 hour');
    await this.newsService.crawlPulseNg();
  }

  //   @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgEntertainment' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgEntertainment' })
  async crawlPulseNgEntertainment() {
    this.logger.debug('crawlPulseNgEntertainment News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/entertainment',
      'entertainment',
    );
  }

  //   @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgPolitics' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgPolitics' })
  async crawlPulseNgPolitics() {
    this.logger.debug('crawlPulseNgPolitics News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/politics',
      'politics',
    );
  }

  //   @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgBusiness' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgBusiness' })
  async crawlPulseNgBusiness() {
    this.logger.debug('crawlPulseNgBusiness News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/business',
      'business',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgWorld' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgWorld' })
  async crawlPulseNgWorld() {
    this.logger.debug('crawlPulseNgWorld News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/world',
      'world',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgLifestyle' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgLifestyle' })
  async crawlPulseNgLifestyle() {
    this.logger.debug('crawlPulseNgLifestyle News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/lifestyle',
      'lifestyle',
    );
  }

  // @Cron(CronExpression.EVERY_MINUTE, { name: 'crawlPulseNgTech' })
  @Cron(CronExpression.EVERY_HOUR, { name: 'crawlPulseNgTech' })
  async crawlPulseNgTech() {
    this.logger.debug('crawlPulseNgTech News Every 1 hour');
    await this.newsService.crawlPulseNgByCategory(
      'https://www.pulse.ng/technology',
      'technology',
    );
  }
}
