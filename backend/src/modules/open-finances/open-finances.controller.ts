import { ApiController } from '@common/decorators/api-controller.decorator';
import { ApiRouteConfig } from '@common/decorators/api-responses.decorator';
import { Param, Query } from '@nestjs/common';

import { FindUserDto } from './dto/find-user.dto';
import { OpenFinancesService } from './open-finances.service';

@ApiController('open-finances', 'OpenFinances')
export class OpenFinancesController {
  constructor(private readonly openFinancesService: OpenFinancesService) {}

  @ApiRouteConfig({
    method: {
      type: 'get',
    },
    bearerAuth: false,
  })
  findUsers(@Query() params: FindUserDto) {
    return this.openFinancesService.findUsers(params);
  }

  @ApiRouteConfig({
    method: {
      type: 'get',
      path: ':userId',
    },
    bearerAuth: false,
  })
  getUserInfos(@Param('userId') userId: string) {
    return this.openFinancesService.getUserInfos(userId);
  }
}
