import { ApiProperty } from '@nestjs/swagger';

export class FindUserResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  cpf: string;
}
