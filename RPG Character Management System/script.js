//! RPG Character Management System 
/*
Character Constructer: 
  Name
  CharacterClass(Warrior, Mage, Archer, etc)
  Level
  Health(100)
  Gold(50)
  Inventory(Empty Array) 

Character Methods:
  takeDamage(amount): Health <= 0; 
  heal(amount): Health >= 100
  earnGold(amount): gold++
  spendGold(amount): gold-- if sufficient (Display message if character does not have enougt gold)
  addItem(item): add item to inventory 
  showInfo(): display character information
  
  Must support chaining;


Characters Companion:
  some characters should have a pet 
  displayed through method: showCompanion()
  if no pet, then message "No companion assigned"


4+ Characters in arrary:
  Two must have same class 
  create array only having warrior types 
  loop to display only one characters properites and values 
  
Object copying challenge:
  Create character object with nested info (separate from the constructer as a method cannot copy nested functions)
  Then create a shallow copy (one that still includes nested functions)
  Then create a deep structured copy
  
Implement method to return wanted primitve
  string - return the characters name and class
  number - return the characters level
  default - retunr the characters level 
  Test (Predict before running)

Method Chaining on one character


  */ 


function Character(name, type, level){
  this.name = name; 
  this.type = type; 
  this.level = level; 
  this.health = 100; 
  this.gold = 50; 
  this.inventory = [];

  // Methods 

  this.takeDamage = function(amount) {
    this.health -= amount; 
    return this; 
  }

  this.heal = function(amount){
    this.health += amount; 
    return this;
  }

  this.earnGold = function(amount){
    this.gold += amount; 
    return this; 
  }
  
  this.spendGold = function(amount){
    if(this.gold >= amount){
      this.gold -= amount
    } else {
      console.log("Error: Insufficent funds!")
    }
    return this; 
  }

  this.addItem = function(item){
    this.inventory += item; 
    return this; 
  }

  this.showInfo = function(){
    console.log(`Player: ${this.name}, Class: ${this.type}, LVL: ${this.level}{\n  Health: ${this.health},\n  Gold: ${this.gold}\n  Inventory: ${this.inventory}\n}
      `)
     return this;  
  }

  this.showCompanion = function(){
    if(this?.companion){
      console.log(`Companion: {\n Type: ${this.companion.type}\n Name: ${this?.companion?.name}\n}`)
    } else{
      console.log("Has No Companion!")
    }
    return this; 
  }
}


let char1 = new Character("Adonyx", "Warrior", 40); 
let char2 = new Character("AsoJuKai", "Warrior", 70); 
let char3 = new Character("Bario", "Mage", 80); 
let char4 = new Character("Theo", "Devil", 90); 
let char5 = new Character("Gabriel", "Angel", 100); 

let characters = [char1, char2, char3, char4, char5]; 

let warriors = characters.filter((character) => character.type === "Warrior"); 


char1.companion = {
    type: "Dog",
    name: "Lucas"
  }


let obj = {
  name: "nyx", 
  type: "tech",

  meals: {
    type: "Pasta",
  },

  sayHello() {
    console.log("Hello"); 
  }
}  

let newObj = Object.assign({}, obj);
let deepNewObj = structuredClone(obj); 

console.log(hyg); 
// Task #4 
// for(let key in char1){
//   console.log(key, char1[key]);
// }

// char1.showInfo().showCompanion();

// console.log(warriors);
