import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from './elastice/elastice.module';

@Module({
  imports: [ElasticsearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
