"use strict";
class Person {
  //statine savybe priskiriama prie pacios klases
  static personCount = 0;
  constructor(name, surname, age) {
    this.id = `prsn_${Person.personCount}`;
    this.name = name.toUpperCase();
    this.surname = surname;
    // this.idCode = idCode;
    this.age = age;
    // this.gender = gender;
    Person.personCount++;
  }
  greet() {
    const greetString = `Hello my name is ${this.name} and I am ${this.age} years old`;
    console.log(greetString);
  }
}
const p1 = new Person("James", "Jameson", 25);
const p2 = new Person("Jill", "Smith", 22);
console.log("p1===", p1);
p1.greet();
p2.greet();

// console.log(`p1.idCode===`, p1.idCode);

// Person.personCount++;
// console.log(``);
