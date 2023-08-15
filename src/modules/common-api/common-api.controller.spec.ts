import { Test, TestingModule } from '@nestjs/testing';
import { CommonApiController } from './common-api.controller';

describe('CommonApiController', () => {
  let controller: CommonApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonApiController],
    }).compile();

    controller = module.get<CommonApiController>(CommonApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
