import { Module } from '@nestjs/common';

import { OpenFinancesController } from './open-finances.controller';
import { OpenFinancesService } from './open-finances.service';

@Module({
  controllers: [OpenFinancesController],
  providers: [OpenFinancesService],
})
export class OpenFinancesModule {}
