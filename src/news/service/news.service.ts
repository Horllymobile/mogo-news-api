import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { NewsEntity } from '../entity/news.entity';
import { NewsRepository } from '../repository/news.repository';
import * as cheerio from 'cheerio';
import { link } from 'fs';

@Injectable()
export class NewsService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(NewsEntity) private newsRepo: NewsRepository,
  ) {}

  async crawlPunch() {
    try {
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      ];

      const link = 'https://punchng.com/';
      const randomUserAgent =
        userAgents[Math.floor(Math.random() * userAgents.length)];
      const response = await firstValueFrom(
        this.httpService.get(link, {
          headers: {
            'User-Agent': randomUserAgent,
          },
        }),
      );
      // console.log(response.data);
      const $ = cheerio.load(response.data);
      let scrapedData = [];

      $('div.just-in-timeline').each((index, ele) => {
        $(ele)
          .find('ul')
          .each((index, el) => {
            $(el)
              .find('li')
              .each((index, element) => {
                // console.log(index);
                const time = $(element).find('.meta-time').text().trim();
                const titleElement = $(element).find('.entry-title a');
                const title = titleElement.text().trim();
                const link = titleElement.attr('href');

                if (title && link) {
                  scrapedData.push({ time, title, link, blog: 'punch' });
                }
              });
          });
      });
      console.log(scrapedData);
      if (scrapedData.length) {
        await this.newsRepo.save(
          scrapedData.map((news) => ({
            title: news.title,
            time: news.time,
            link: news.link,
            blog: news.blog,
            created_at: new Date().toISOString(),
          })),
        );
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Unable to fetch link',
        // status: API_RESPONSE_STATUS.FAILED,
      });
    }
  }

  async crawlLegit() {
    try {
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      ];

      const link = 'https://www.legit.ng/';
      const randomUserAgent =
        userAgents[Math.floor(Math.random() * userAgents.length)];
      const response = await firstValueFrom(
        this.httpService.get(link, {
          headers: {
            'User-Agent': randomUserAgent,
          },
        }),
      );
      // console.log(response.data);
      const $ = cheerio.load(response.data);
      let scrapedData = [];

      $('section.l-article-column').each((index, elem) => {
        // console.log(elem);
        $(elem)
          .find('article.l-hero-section__item')
          .each((index, ele) => {
            // console.log(ele);
            const titleHighlitedElement = $(ele).find(
              'a.c-article-card-highlighted__headline',
            );

            const titleElement = $(ele).find('a.c-article-card__headline');

            // console.log(titleElement);
            const title =
              titleHighlitedElement.text().trim() || titleElement.text().trim();
            // console.log(titleHighlitedElement);
            const link =
              titleHighlitedElement.attr('href') || titleElement.attr('href');
            const time = $(ele)
              .find('div.c-article-info')
              .find('time.c-article-info__time')
              .text()
              .trim();
            // console.log(link);
            // console.log(title);
            // console.log(time);
            if (title && link) {
              scrapedData.push({ time, title, link, blog: 'legit' });
            }
          });
      });
      console.log(scrapedData);
      if (scrapedData.length) {
        await this.newsRepo.save(
          scrapedData.map((news) => ({
            title: news.title,
            time: news.time,
            link: news.link,
            blog: news.blog,
            created_at: new Date().toISOString(),
          })),
        );
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Unable to fetch link',
        // status: API_RESPONSE_STATUS.FAILED,
      });
    }
  }

  async crawlSaharaReporters() {
    try {
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      ];

      const siteLik = 'https://saharareporters.com/';
      const randomUserAgent =
        userAgents[Math.floor(Math.random() * userAgents.length)];
      const response = await firstValueFrom(
        this.httpService.get(siteLik, {
          headers: {
            'User-Agent': randomUserAgent,
          },
        }),
      );
      // console.log(response.data);
      const $ = cheerio.load(response.data);
      let scrapedData = [];

      $('div.columns').each((index, elem) => {
        // console.log(elem);
        $(elem)
          .find('div.views-row')
          .each((index, ele) => {
            $(ele)
              .find('div.node')
              .each((index, el) => {
                $(el)
                  .find('div.card-content')
                  .each((index, el) => {
                    const title = $(el).find('h2.title').text().trim();
                    const likeEl = $(el).find('h2.title a');
                    const time = $(el)
                      .find('div.card-content-bottom')
                      .text()
                      .trim();
                    const link = `${siteLik}${likeEl.attr('href')}`;
                    // console.log(date.text().trim());
                    // console.log(title.text().trim());
                    // console.log(link.trim());
                    if (title && link) {
                      scrapedData.push({
                        time,
                        title,
                        link,
                        blog: 'sahara reporters',
                      });
                    }
                  });
              });
          });
      });
      console.log(scrapedData);
      if (scrapedData.length) {
        await this.newsRepo.save(
          scrapedData.slice(0, 5).map((news) => ({
            title: news.title,
            time: news.time,
            link: news.link,
            blog: news.blog,
            created_at: new Date().toISOString(),
          })),
        );
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Unable to fetch link',
        // status: API_RESPONSE_STATUS.FAILED,
      });
    }
  }

  async crawlPulseNg() {
    try {
      const userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
      ];

      const link = 'https://www.pulse.ng/';
      //   const randomUserAgent =
      //     userAgents[Math.floor(Math.random() * userAgents.length)];
      //   const response = await firstValueFrom(
      //     this.httpService.get(link, {
      //       headers: {
      //         'User-Agent': randomUserAgent,
      //       },
      //     }),
      //   );
      // console.log(response.data);
      //   const $ = cheerio.load(response.data);
      //   let scrapedData = [];

      // CategoriesExploration_articlecard-wrapper__NZmqF

      //   console.log(scrapedData);
      //   if (scrapedData.length) {
      //     await this.newsRepo.save(
      //       scrapedData.map((news) => ({
      //         title: news.title,
      //         time: news.time,
      //         link: news.link,
      //         blog: news.blog,
      //         created_at: new Date().toISOString(),
      //       })),
      //     );
      //   }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException({
        message: 'Unable to fetch link',
        // status: API_RESPONSE_STATUS.FAILED,
      });
    }
  }

  async getNews() {
    const newsData = await this.newsRepo.find({
      order: {
        time: 'DESC',
        created_at: 'DESC',
      },
    });

    const groupedNews = newsData.reduce(
      (acc, item) => {
        if (!acc[item.blog]) {
          acc[item.blog] = [];
        }
        acc[item.blog].push(item);
        return acc;
      },
      {} as Record<string, typeof newsData>,
    );

    return Object.entries(groupedNews).map(([blog, news]) => ({
      blog,
      news,
    }));
  }

  async deleteNews() {
    const newsData = await this.newsRepo.find();
    await this.newsRepo.delete(newsData.map((news) => news.id));
  }
}
