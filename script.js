function BankAccount(name, balance){
  this.name = name; 
  this.balance = balance;

  this.deposit = function(amount){
    this.balance += amount;
    return this;
  }

  this.withdraw = function(amount){
    if(this.balance >= amount){
      this.balance -= amount; 
    } else{
      console.log("Insufficient Funds"); 
    }
    return this;
  }

  this.showBalance = function(){
    console.log(`Owner Name: ${this.name}, Current Balance: ${this.balance}`);
  }
  return this; 
}

let user1 = new BankAccount("Adonyx", 100);
let user2 = new BankAccount("Aso", 1300);
let user3 = new BankAccount("Kai", 750);

let users = [user1, user2, user3]; 

let richUsers = users.filter((user) => user.balance > 500); 

console.log(richUsers);
