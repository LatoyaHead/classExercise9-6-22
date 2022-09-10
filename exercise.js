///====== STATIC METHOD AND PROPERTIES EXERCISE =======///

// class Governor {
//   static USCitizen = true
//   static voter = true
//   static governorAge() {
//     return 40
//   }
//   static isCitizen() {
//     return this.USCitizen
//   }
// }
// console.log(Governor.USCitizen);
// console.log(Governor.governorAge());
// console.log(Governor.isCitizen());


////====== Inheritance Exercise ======////

// class Person {
//   constructor(name, hair, eyes) {
//     this.name = name
//     this.hair = hair
//     this.eyes = eyes
//   }
//   run() {
//     console.log(`I'm running.`)
//   }
//   taste() {
//     console.log(`I can taste.`);
//   }
//   hear() {
//     console.log(`I can hear.`)
//   }
// }
// class PostalWorkers extends Person{
//   walk() {
//     console.log(`I can walk to deliver packages.`)
//   }
//   speak() {
//     console.log(`I speak to customers.`);
//   }
//   think() {
//     console.log(`I think about my day.`)
//   }
// }
// class Chef extends Person{
//   walk() {
//     console.log(`I walk in the kitchen.`)
//   }
//   speak() {
//     console.log(`I speak to workers.`)
//   }
//   think() {
//     console.log(`I think about new food items.`)
//   }
// }

// const Gory = new Chef('Gory', 'black', 'brown')
// const Chop = new Chef('Chop', 'blonde', 'blue')
// const John = new PostalWorkers('John', 'black', 'grey')
// const Bryan = new PostalWorkers('Bryan', 'brown', 'brown')
// Gory.walk();
// Chop.think();
// console.log(John.name);
// Bryan.run();


///======= Bank Account Exercise ======///


class BankAccount {
  constructor() {
    this.ownerName = 'John'
    this.balance = 250.00
    this.acctNum = 12345678
  }
  deposit(amount) {
    this.balance += amount
  }
  withdraw(amount) {
    this.balance = this.balance - amount
  }
}
class CheckingAccount extends BankAccount {
  constructor(overdraftEnabled) {
    super()
    this.overdraftEnabled = overdraftEnabled
  }
  withdraw(amount) {
    if(this.overdraftEnabled && this.balance - amount < 0) { //First check is to see if overdraft is enabled when balance doesn't have enough funds
      this.balance = this.balance - amount 
    } else if(this.overdraftEnabled === false && this.balance - amount < 0) { //checks if overdraft is false and have enough funds
      console.log('You dont have enough money'); 
    } else { //runs even though user has enough money to withdraw
      this.balance = this.balance - amount
    }
  }
}
class SavingsAccount extends BankAccount {
  withdraw() {
    console.log('Cant withdraw');
  }
}



// const toyaAccount = new BankAccount()
// console.log(toyaAccount.balance);
// toyaAccount.deposit(200.00)
// console.log(toyaAccount.balance);
// toyaAccount.withdraw(50.75)
// console.log(toyaAccount.balance);  
//  const latoya = new CheckingAccount(true)
//  console.log(latoya.withdraw(300.00));
//  console.log(latoya.balance);
 const latoya = new SavingsAccount()
 latoya.withdraw()
 console.log(latoya.ownerName)