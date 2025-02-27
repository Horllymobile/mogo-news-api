import { Module } from '@nestjs/common';
import { NewsService } from './service/news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './entity/news.entity';
import { NewsController } from './controller/news.controller';
import { NewsRepository } from './repository/news.repository';
import { TasksService } from '../core/services/task.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
    HttpModule,
    CacheModule.register(),
  ],
  controllers: [NewsController],
  providers: [NewsService, NewsRepository, TasksService],
  exports: [TypeOrmModule.forFeature([NewsEntity])],
})
export class NewsModule {}
