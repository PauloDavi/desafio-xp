import { ApiProperty } from '@nestjs/swagger';

export class DataBank {
  @ApiProperty()
  bank: string;

  @ApiProperty()
  score: number;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  hasCreditCard: boolean;

  @ApiProperty()
  investments: string[];

  @ApiProperty()
  credits: string[];
}

export class GetUserInfosDto {
  @ApiProperty()
  availableService: string[];

  @ApiProperty()
  banks: DataBank[];
}
