import { Module } from '@nestjs/common';
import { TaxisService } from './taxis.service';
import { TaxisController } from './taxis.controller';

@Module({
  controllers: [TaxisController],
  providers: [TaxisService]
})
export class TaxisModule {}
