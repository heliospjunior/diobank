import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
//console.log(peopleAccount)
peopleAccount.deposit(150)
//const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//companyAccount.deposit()
peopleAccount.withdraw(20)
//console.log('Saldo final: ' + peopleAccount.balance)

const companyAccount: CompanyAccount = new CompanyAccount('Usinagem', 10)
companyAccount.getLoan(1000);

const specialAccount: SpecialAccount = new SpecialAccount('Imagine', 11)
specialAccount.deposit(500);