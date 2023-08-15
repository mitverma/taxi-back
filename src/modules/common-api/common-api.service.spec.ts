import { Test, TestingModule } from '@nestjs/testing';
import { CommonApiService } from './common-api.service';

describe('CommonApiService', () => {
  let service: CommonApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonApiService],
    }).compile();

    service = module.get<CommonApiService>(CommonApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
