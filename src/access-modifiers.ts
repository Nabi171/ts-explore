// class BankAccount {
//     public readonly id: number;
//     public name: string;
//     private _balance: number;

//     constructor(id: number, name: string, balance: number) {
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     getBalance() {
//         console.log(`My current Balance is:${this._balance}`)
//     }
//     addDeposit(amount: number) {
//         this._balance = this._balance + amount;
//     }
// }

// class StudentAccount extends BankAccount{
//     test(){

//     }
// }


// const myAccount = new BankAccount(444, "Persian", 20);
// myAccount._balance = 0;
// console.log(myAccount);