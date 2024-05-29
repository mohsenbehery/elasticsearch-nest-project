import { Test, TestingModule } from '@nestjs/testing';
import { ElasticeService } from './elastice.service';

describe('ElasticeService', () => {
  let service: ElasticeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElasticeService],
    }).compile();

    service = module.get<ElasticeService>(ElasticeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
