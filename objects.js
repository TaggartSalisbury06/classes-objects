
const person = {
  first: "Taggart",
  last: "Salisbury",
  age: 18
}
// dot notation
// console.log(person.first)

// bracket notation
// console.log(person['last'])

const meal = {
  appetizer: "chips & salsa",
  entree: "carne asada burrito",
  dessert: "tres leches",
  drink: "horchata"
};

const meal2 = {
  appetizer: "ceviche",
  entree: "loaded nachos",
  dessert: "fired ice cream",
  drink: "cerveza"
}


let { appetizer, entree, dessert, drink } = meal;

let newFav = "Dr. Pep"

meal.drink = newFav

const { drink: drink2, appetizer: appetizer2, entree: entree2, dessert: dessert2} = meal2

// loop over meal2 
// if the key is dessert update value to be churros and print to console else print the value

for (let key in meal2){
  if(key === "dessert"){
    meal2[key] = "churros"
    console.log(meal2[key])
  }else {
    console.log(key)
  }
}

let teams = {
  teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
  teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
  teamThree: ['porter', 'blake', 'june', 'owen'],
  teamFour: ['brian', 'riley', 'ezra', 'jordan'],
  teamFive: ['grey', 'milo', 'mckay', 'leo']
}

teams.teamSix = ["Jared", "Kyle", "Bob", "Jordan"]


delete teams.teamFour

console.log(teams);
