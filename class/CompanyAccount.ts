import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (emprestimo: number) => {

    if(this.validateStatus()){
      this.balance = this.balance + emprestimo
      console.log('Voce pegou emprestimo de: R$' + emprestimo)
      console.log('Saldo final: R$' + this.balance)
    }
    
  }
}
