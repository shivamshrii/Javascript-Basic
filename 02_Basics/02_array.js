const ramayan_heroes = ["ram", "hanuman", "Lakshman"]
const god = ["Krishana", "Radhe", "Sita"]

// ramayan_heroes.push(god)

// console.log(ramayan_heroes);
// console.log(ramayan_heroes[3][1]);

// const allHeros = ramayan_heroes.concat(god)
// console.log(allHeros);

const allNewHeros = [...ramayan_heroes,...god]
console.log(allNewHeros);
