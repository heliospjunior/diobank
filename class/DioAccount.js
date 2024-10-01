"use strict";
exports.__esModule = true;
exports.DioAccount = void 0;
var DioAccount = /** @class */ (function () {
    function DioAccount(name, accountNumber) {
        var _this = this;
        this.balance = 0;
        this.status = true;
        this.setName = function (name) {
            _this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = function () {
            return _this.name;
        };
        this.deposit = function (valor) {
            if (_this.validateStatus()) {
                _this.balance = _this.balance + valor;
                console.log('Voce depositou: R$' + valor);
                console.log('Saldo final: R$' + _this.balance);
            }
        };
        this.withdraw = function (saque) {
            if (_this.validateStatus() && _this.balance >= saque) {
                _this.balance = _this.balance - saque;
                console.log('Voce sacou: R$' + saque);
                console.log('Saldo final: R$' + _this.balance);
            }
            else {
                console.log("Saldo insuficiente.");
            }
        };
        this.getBalance = function () {
            console.log(_this.balance);
        };
        this.validateStatus = function () {
            if (_this.status) {
                return _this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
    DioAccount.validateStatus = function () {
        throw new Error("Method not implemented.");
    };
    return DioAccount;
}());
exports.DioAccount = DioAccount;
