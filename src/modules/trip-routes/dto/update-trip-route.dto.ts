import { PartialType } from '@nestjs/swagger';
import { CreateTripRouteDto } from './create-trip-route.dto';

export class UpdateTripRouteDto extends PartialType(CreateTripRouteDto) {}
