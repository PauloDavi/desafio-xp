import { Injectable } from '@nestjs/common';

import { FindUserDto } from './dto/find-user.dto';
import { DataBank } from './dto/get-user-infos.dto';
import { users } from './users';
import { xp } from './xp';



@Injectable()
export class OpenFinancesService {
  async findUsers({ search }: FindUserDto) {
    return users
      .map(({ name, cpf }) => ({ name, cpf }))
      .filter(
        ({ name, cpf }) =>
          name.search(new RegExp(search, 'i')) !== -1 ||
          cpf.search(new RegExp(search, 'i')) !== -1,
      );
  }

  async getUserInfos(userId: string) {
    const user = users.find(({ name }) => name === userId);
    
    const banks: DataBank[] = user.banks.map((bank) => ({
      bank: bank.institution.bankName,
      score: bank.suitability,
      startDate: new Date(bank.startDate).toISOString(),
      hasCreditCard: bank.creditCard?.limit && bank.creditCard?.limit > 0,
      investments: Object.entries(bank.investments).filter(([, value]) => value.length > 0).map(([key]) => key),
      credits: bank.consumedCreditLines.map(({ type }) => type),
    }))

    const { score: userXpScore } = banks.find(({ bank }) => bank === 'xp');

    const { name, ...services} = xp

    const availableServices: string[] = []
    Object.values(services).forEach((service) => {
      service.forEach(({ risk, identity }) => {
        if (risk >= userXpScore - 10 && risk <= userXpScore + 10) {
          availableServices.push(identity)
        }
      })
    })

    return { availableServices, banks };
  }
}
