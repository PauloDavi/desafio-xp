import { ApiProperty } from '@nestjs/swagger';

export class FindUserDto {
  @ApiProperty()
  search?: string;
}
