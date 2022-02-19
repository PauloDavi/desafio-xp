import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { createMongooseFactoryModel } from '@utils/create-mongoose-factory-model';

import { User, UserSchema } from '../users/schemas/user.schema';
import { AuthController } from './controllers/auth.controller';
import { AUTH_TYPES } from './interfaces/types';
import { LoginServiceImp } from './services/login.service';

const loginService = {
  provide: AUTH_TYPES.services.LoginService,
  useClass: LoginServiceImp,
};

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => ({
        secret: config.get('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: config.get('JWT_EXPIRATION_TIME'),
        },
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeatureAsync([
      createMongooseFactoryModel(User.name, UserSchema),
    ]),
  ],
  controllers: [AuthController],
  providers: [loginService],
})
export class AuthModule {}
