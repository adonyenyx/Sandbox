function Character(name, type){
  this.name =  name;
  this.type = type;
  this.health = 100; 
  this.level = 1;

   this.takeDamage = function(amount){
    this.health -= amount;
    return this;
  }

  this.heal = function(amount){
    this.health += amount
    return this;
  }

  this.levelUp = () => {
    this.level += 1; 
    return this; 
  }

  this.showStats = () => {
    console.log(`Name: ${this.name}, Class: ${this.type}, Health: ${this.health}, Level: ${this.level}`);
    return this;
  }

  this.showWeapon = () => {

    if(this.equipment?.weapon?.name){
      console.log(`Weapon: ${this.equipment?.weapon?.name}`);
    } else {
      console.log(`User has no weapon`)
    }


    return this;
  }

}

// let user1 = new Character("Adonay", "Warrior");
// let user2 = new Character("MonayMan", "Worker");


// user1.equipment = {
//   weapon: {
//     name: "Iron Fist",
//     damage: 25
//   }
// }

const characters = [
  {
    name: "Mace",
    class: "Mage",

  },

  {
    name: "Leon",
    class: "Warrior",

  },
  
  {
    name: "Pacer",
    class: "Mage",
  }
]

const Mages = characters.filter((character) => character.class === "Mage"); 


for(let key in characters[0]){
  console.log(key, characters[0][key])
}
