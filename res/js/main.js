const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgrade = document.getElementById("upgrade");
const autoclicker = document.getElementById("autoclicker");

let numberOfCookies = 0;
let numberOfCookiesOnClick = 1;
let upgradePrice = 50;
let autoclickerPrice = 1000;
let numberOfAutoclickerCookies = 0;

cookie.onclick = () => {
  // ++ => +1; numberOfCookies += 1; upgrade numberOfCookies += 2...
  numberOfCookies += numberOfCookiesOnClick;
  counter.innerHTML = `Počet: ${numberOfCookies}`;
};

upgrade.onclick = () => {
  if (numberOfCookies >= upgradePrice) {
    numberOfCookies -= upgradePrice; //numberOfCookies = numberOfCookies - 50;
    upgradePrice *= 2;
    upgrade.innerHTML = `Buy upgrade: ${upgradePrice}`;
    numberOfCookiesOnClick += 5;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
  }
};

autoclicker.onclick = () => {
  if (numberOfCookies >= autoclickerPrice) {
    numberOfCookies -= autoclickerPrice;
    counter.innerHTML = `Počet: ${numberOfCookies}`;
    if (numberOfAutoclickerCookies == 0) {
      setInterval(() => {
        numberOfCookies += numberOfAutoclickerCookies;
        counter.innerHTML = `Počet: ${numberOfCookies}`;
      }, 1000);
    }
    numberOfAutoclickerCookies++;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
  }
};
