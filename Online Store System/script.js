function Product(name, category, price){
  this.name = name; 
  this.category = category; 
  this.price = price;
  this.stock = 10; 

  this.sell = function(amount){
    this.stock -= amount;
    return this; 
  }

  this.restock = function(amount){
    this.stock += amount; 
    return this;
  }

  this.applyDiscount = function(amount){
    this.price = this.price * (amount / 100); 
    return this;
  }

  this.showInfo = function(){
    console.log(`${this.name}, ${this.category}, ${this.price}, ${this.stock}`);
    return this;
  }
}


let product = new Product("Laptop", "Tech", 150) 

product.manufacturer = {
  
}
