function Product(name, category, price){
  this.name = name; 
  this.category = category; 
  this.price = price;
  this.stock = 10; 

  this[Symbol.toPrimitive] = function(hint){

    if (hint === "string"){
      return `${this.name} - ${this.category}`;
    } else {
      return this.price;
    }
  };

  this.sell = function(amount){
    this.stock -= amount;
    return this; 
  }

  this.restock = function(amount){
    this.stock += amount; 
    return this;
  }

  this.applyDiscount = function(amount){
    this.price = this.price - (this.price * (amount / 100)); 
    return this;
  }

  this.showInfo = function(){
    console.log(`${this.name}, ${this.category}, ${this.price}, ${this.stock}`);
    return this;
  }

  this.showManufacturer = function() {
   if(this.manufacturer?.company?.name){
    console.log(this.manufacturer?.company?.name);
   }else{
    console.log("Manufacturer Unknown");
   }
  
   return this; 

  }
}

const product1 = new Product("Laptop", "Tech", 1800);
const product2 = new Product("Phone", "Tech", 1000);
const product3 = new Product("Nike Shoes", "Clothing", 120);
const product4 = new Product("Pot", "Cooking", 50);

const  products = [product1, product2, product3, product4]

product1.manufacturer = {
  company: {
    name: "xyx",
    country: "United States"
  } 
}

const techProducts = products.filter((product) => product.category === "Tech"); 


// for(let key in products[0]){
//   console.log([key], products[0][key])
// }

console.log(String(product2));