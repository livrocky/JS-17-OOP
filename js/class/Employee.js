"use strict";

class Employee extends Person {
  //private properties
  constructor(name, surname, age, hourlyPay) {
    super(name, surname, age, hourlyPay);
    this.payPerHour = hourlyPay;
  }
}
const e1 = new Employee("Mike", "Mikson", 33, 15);
console.log("e1===", e1);

e1.greet();
