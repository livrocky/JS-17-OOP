"use strict";

class Employee extends Person {
  //private properties
  #payPerHour;
  #hoursWorked = 0;
  constructor(name, surname, age, hourlyPay) {
    super(name, surname, age, hourlyPay);
    this.#payPerHour = hourlyPay;
  }

  //geteris leidzia tam tikru budu atvaizduoti reiksme
  get hoursWorked() {
    //validacija
    return this.#hoursWorked;
  }

  //seteris nustatyti valandiniui
  set payPerHour([valandinis, pass]) {
    if (pass === "blue") {
      this.#payPerHour = valandinis;
    } else {
      console.log("wrong pass");
    }
  }
  //metodas work(kiekVal) priima kiek valandu isdirbta ir padidina tuo skaiciu #hoursWorked

  work(valSk) {
    this.#hoursWorked += valSk;
  }

  // calcPay() - aprasyti metododa kuris apskaiciuoja  // kokia suma sumoketi ir nunulina isdirbtas valandas

  calcPay() {
    const totalToPay = this.#hoursWorked * this.#payPerHour;
    this.$hoursWorked = 0;
    return totalToPay;
  }
}
const e1 = new Employee("Mike", "Mikson", 33, 15);
const e2 = new Employee("Bob", "Bobson", 35, 17);
e1.hasCar = true;
e1.greet();

// console.log("e1 before pay", e1);
e1.work(160);
e2.work(100);
e2.work(20);
console.log("e1 after work===", e1);
console.log("e2 after work===", e2);

const e1Sallary = e1.calcPay();
const e2Sallary = e2.calcPay();
// const algos = [e1, e2].map((em) => {
//     return em.calcPay());

console.log("e1Sallary===", e1Sallary);
console.log("e2Sallary===", e2Sallary);
console.log("e1===", e1);
// e1.payPerHour = 20;

e1.payPerHour = [20, "blue"];
console.log(`e1===`, e1);
