const cookieRecipie = {
  CookieDough: 2,
  heat: 1,
  chocolateChips: 4,
};

const cookieBaseRecipie = {
  ...cookieRecipie,
  dough: 1,
  chocolateChips: 4,
}

console.log(cookieRecipie);
console.log(cookieBaseRecipie);
