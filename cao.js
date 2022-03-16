//1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

class Person {
  constructor([name, surname]) {
    this.name = name;
    this.surname = surname;
    this.appear = function () {
      //   const displayTableEl = document.getElementById("table");
      //   displayTableEl.append(displayNameEl, displaySurnameEl);
      //   document.body.after(displayTableEl);
    };
  }
}

// const another = new Person();

const formEl = document.getElementById("fullName");
const inputFullNameEl = document.getElementById("inputFullName");

// result.pushToDisplay();

let users = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputFullNameEl.value.trim().split(" ");
  const displayNameEl = document.getElementById("name");
  displayNameEl.textContent = inputValue[0].charAt(0).toUpperCase() + inputValue[0].slice(1).toLowerCase();
  const displaySurnameEl = document.getElementById("surname");
  displaySurnameEl.textContent = inputValue[1].charAt(0).toUpperCase() + inputValue[1].slice(1).toLowerCase();
  users.push(new Person(inputValue));
  console.log("users===", users);
});
