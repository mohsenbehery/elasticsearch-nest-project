import { Client } from '@elastic/elasticsearch';
import { ConfigService } from '@nestjs/config';

export const ElasticsearchConfig = {
  provide: 'ELASTICSEARCH_CLIENT',
  useFactory: (configService: ConfigService) => {
    return new Client({
      node: configService.get<string>('ELASTICSEARCH_NODE'),
      auth: {
        username: configService.get<string>('ELASTICSEARCH_USERNAME'),
        password: configService.get<string>('ELASTICSEARCH_PASSWORD'),
      },
    });
  },
  inject: [ConfigService],
};
