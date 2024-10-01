export abstract class DioAccount {
  static validateStatus() {
    throw new Error("Method not implemented.")
  }
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if(this.validateStatus()){
      this.balance = this.balance + valor
      console.log('Voce depositou: R$' + valor)
      console.log('Saldo final: R$' + this.balance)
    }
  }

  withdraw = (saque: number): void => {
    if(this.validateStatus() && this.balance >= saque){
      this.balance = this.balance - saque
      console.log('Voce sacou: R$' + saque)
      console.log('Saldo final: R$' + this.balance)
    } else {
      console.log("Saldo insuficiente.")
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
