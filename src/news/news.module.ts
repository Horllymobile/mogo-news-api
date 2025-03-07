import { Module } from '@nestjs/common';
import { NewsService } from './service/news.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsEntity } from './entity/news.entity';
import { NewsController } from './controller/news.controller';
import { NewsRepository } from './repository/news.repository';
import { TasksService } from '../core/services/task.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { SaharaService } from 'src/core/services/sahara.service';
import { PunchService } from 'src/core/services/punch.service';
import { LegitService } from 'src/core/services/legit.service';
import { PulseService } from 'src/core/services/pulse.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([NewsEntity]),
    HttpModule,
    CacheModule.register(),
  ],
  controllers: [NewsController],
  providers: [
    NewsService,
    NewsRepository,
    TasksService,
    SaharaService,
    PunchService,
    LegitService,
    PulseService,
  ],
  exports: [TypeOrmModule.forFeature([NewsEntity])],
})
export class NewsModule {}
