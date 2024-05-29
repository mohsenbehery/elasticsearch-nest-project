import { Module } from '@nestjs/common';
import { ElasticsearchService } from './elastice.service';
import { ElasticsearchController } from './elastice.controller';
import { ElasticsearchConfig } from '../config/elasticsearch.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ElasticsearchConfig, ElasticsearchService],
  controllers: [ElasticsearchController],
})
export class ElasticsearchModule {}
