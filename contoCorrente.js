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
    function SonAccount(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.versamentoUno = function () {
        return this.balanceInit;
    };
    return SonAccount;
}());
var primoVersamento = new SonAccount(100);
console.log('Primo versamento €', primoVersamento.versamentoUno());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit) {
        var _this = _super.call(this, _balanceInit) || this;
        _this.balanceInit = _addinterest;
        return _this;
    }
    return MotherAccount;
}(SonAccount));
