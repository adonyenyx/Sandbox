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


