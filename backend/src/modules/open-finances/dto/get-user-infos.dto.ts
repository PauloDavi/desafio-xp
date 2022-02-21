export interface DataBank {
  bank: string;
  score: number;
  startDate: string;
  hasCreditCard: boolean;
  investments: string[];
  credits: string[];
}

export interface GetUserInfosDto {
  availableService: string;
  banks: DataBank[];
}