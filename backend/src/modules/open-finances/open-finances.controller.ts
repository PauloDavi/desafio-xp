import { ApiController } from '@common/decorators/api-controller.decorator';
import { ApiRouteConfig } from '@common/decorators/api-responses.decorator';
import { Param, Query } from '@nestjs/common';

import { FindUserResponseDto } from './dto/find-user-response.dto';
import { FindUserDto } from './dto/find-user.dto';
import { GetUserInfosDto } from './dto/get-user-infos.dto';
import { OpenFinancesService } from './open-finances.service';

@ApiController('open-finances', 'OpenFinances')
export class OpenFinancesController {
  constructor(private readonly openFinancesService: OpenFinancesService) {}

  @ApiRouteConfig({
    method: {
      type: 'get',
    },
    summary: 'Retorna todos os usuários filtrados pelo nome e CPF',
    bearerAuth: false,
    apiOkResponse: {
      type: [FindUserResponseDto],
    },
  })
  findUsers(@Query() params: FindUserDto) {
    return this.openFinancesService.findUsers(params);
  }

  @ApiRouteConfig({
    method: {
      type: 'get',
      path: ':userId',
    },
    summary:
      'Retorna os dados dos bancos cliente e os possíveis produtos XP que são adequados para ele',
    bearerAuth: false,
    apiOkResponse: {
      type: GetUserInfosDto,
    },
  })
  getUserInfos(@Param('userId') userId: string) {
    return this.openFinancesService.getUserInfos(userId);
  }
}
