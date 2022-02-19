import { ApiController } from '@common/decorators/api-controller.decorator';
import { ApiRouteConfig } from '@common/decorators/api-responses.decorator';
import { UserDecorator } from '@common/decorators/user.decorator';
import { AuthObject } from '@common/interfaces/auth-object.interface';
import { UserReadDto } from '@modules/users/dtos/user-read.dto';
import { Body, Inject } from '@nestjs/common';

import { LoginResponseDto } from '../dtos/login-response.dto';
import { LoginDto } from '../dtos/login.dto';
import { LoginService } from '../interfaces/services/login.interface';
import { AUTH_TYPES } from '../interfaces/types';

@ApiController('auth', 'Auth')
export class AuthController {
  constructor(
    @Inject(AUTH_TYPES.services.LoginService)
    private readonly loginService: LoginService,
  ) {}

  @ApiRouteConfig({
    method: {
      type: 'get',
      path: 'validate',
    },
    summary: 'Rota de validação de usuário autenticado',
    apiOkResponse: {
      type: UserReadDto,
      description: 'Usuário autenticado',
    },
    apiUnauthorizedResponse: {
      description: 'Token inválido',
    },
  })
  async validate(@UserDecorator() user: AuthObject) {
    return user;
  }

  @ApiRouteConfig({
    method: {
      type: 'post',
      path: 'login',
    },
    summary: 'Rota de login de usuário',
    bearerAuth: false,
    apiCreatedResponse: {
      description: 'Login success',
      type: LoginResponseDto,
    },
    apiUnauthorizedResponse: {
      description: 'Usuário ou senha inválidos',
    },
  })
  async login(@Body() loginObject: LoginDto) {
    return this.loginService.execute(loginObject);
  }
}
