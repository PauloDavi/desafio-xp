import { ModelPaginateAndSoftDelete } from '@common/interfaces/model-paginate-and-soft-delete.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'bcrypt';

import { UserCreateDto } from '../dtos/user-create.dto';
import { UserReadDto } from '../dtos/user-read.dto';
import { CreateUserService } from '../interfaces/services/create-user.interface';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class CreateUserServiceImp implements CreateUserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: ModelPaginateAndSoftDelete<UserDocument>,
  ) {}

  async execute({
    password,
    email,
    name,
  }: UserCreateDto): Promise<UserReadDto> {
    const hashPassword = await hash(password, 10);

    const user = await this.userModel.create({
      email,
      name,
      password: hashPassword,
      verified: true,
      role: 'client',
    });

    return this.userModel.findById(user.id).lean();
  }
}
