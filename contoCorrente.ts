class SonAccount{
    //1°step tutte le proprieta
    balance:number;
    nome:string;

    //2°step costruttore
    constructor(_nome:string, _balanceInit:number = 0) {
        this.balance = _balanceInit;
        this.nome = _nome;
    }
    withdraw(amount:number):number {
        if(amount <= this.balance) {
            this.balance -= amount;
            return amount;
        }else {
            console.log('Prelievo non effettuato');
            return 0;
        }
    }
    deposit(amount:number):number {
        this.balance += amount;
        return amount;
    }
    whitdrawVenti():number {
        return this.withdraw(20);
    }
    depositVenti():number {
        return this.deposit(20);
    }
}
class MotherAccount extends SonAccount {
    interest:number;

    constructor(n:string, _balanceInit:number = 0) {
        super(n, _balanceInit);
        this.interest = .1;
    }
    getInterest() {
        return this.interest
    }

    whitdraw(amount:number):number {
        let w = (amount + this.countInterest(amount));
        if(w <= this.balance) {
            this.balance -= w;
            return w
        } else {
            return 0
        }
    }

    deposit(amount: number):number {
        let d = (amount - this.countInterest(amount));
        this.balance += d
        return d;
    }
    
    countInterest(a:number):number {
        return a * this.interest;
    }
}

let m = new MotherAccount('test')