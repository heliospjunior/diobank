"use strict";
exports.__esModule = true;
var CompanyAccount_1 = require("./class/CompanyAccount");
var PeopleAccount_1 = require("./class/PeopleAccount");
var SpecialAccount_1 = require("./class/SpecialAccount");
var peopleAccount = new PeopleAccount_1.PeopleAccount(1, 'Nath', 10);
//console.log(peopleAccount)
peopleAccount.deposit(150);
//const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
//companyAccount.deposit()
peopleAccount.withdraw(20);
//console.log('Saldo final: ' + peopleAccount.balance)
var companyAccount = new CompanyAccount_1.CompanyAccount('Usinagem', 10);
companyAccount.getLoan(1000);
var specialAccount = new SpecialAccount_1.SpecialAccount('Imagine', 11);
specialAccount.deposit(500);
