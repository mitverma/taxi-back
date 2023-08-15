import { Test, TestingModule } from '@nestjs/testing';
import { TaxisController } from './taxis.controller';
import { TaxisService } from './taxis.service';

describe('TaxisController', () => {
  let controller: TaxisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxisController],
      providers: [TaxisService],
    }).compile();

    controller = module.get<TaxisController>(TaxisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
