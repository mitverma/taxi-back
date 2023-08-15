import { Test, TestingModule } from '@nestjs/testing';
import { TripRoutesController } from './trip-routes.controller';
import { TripRoutesService } from './trip-routes.service';

describe('TripRoutesController', () => {
  let controller: TripRoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripRoutesController],
      providers: [TripRoutesService],
    }).compile();

    controller = module.get<TripRoutesController>(TripRoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
