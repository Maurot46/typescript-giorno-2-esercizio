var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    //2°step costruttore
    function SonAccount(_nome, _balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        this.balance = _balanceInit;
        this.nome = _nome;
    }
    SonAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return amount;
        }
        else {
            console.log('Prelievo non effettuato');
            return 0;
        }
    };
    SonAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        return amount;
    };
    SonAccount.prototype.whitdrawVenti = function () {
        return this.withdraw(20);
    };
    SonAccount.prototype.depositVenti = function () {
        return this.deposit(20);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(n, _balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 0; }
        var _this = _super.call(this, n, _balanceInit) || this;
        _this.interest = .1;
        return _this;
    }
    MotherAccount.prototype.getInterest = function () {
        return this.interest;
    };
    MotherAccount.prototype.whitdraw = function (amount) {
        var w = (amount + this.countInterest(amount));
        if (w <= this.balance) {
            this.balance -= w;
            return w;
        }
        else {
            return 0;
        }
    };
    MotherAccount.prototype.deposit = function (amount) {
        var d = (amount - this.countInterest(amount));
        this.balance += d;
        return d;
    };
    MotherAccount.prototype.countInterest = function (a) {
        return a * this.interest;
    };
    return MotherAccount;
}(SonAccount));
var m = new MotherAccount('test');
console.log(m);
