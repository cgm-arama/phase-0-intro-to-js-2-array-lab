// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

cats.push("Catname");

console.log(cats);

cats.unshift("cat");

cats.pop("Catname");

cats.shift("cat");

const newCats = cats.concat("Tomcat");



function prependCat(cat, array) {
  return [cat, ...array];
}

const removeFirstCat = prependCat({ name: "Simba" }, cats);

console.log(newCats);
console.log(cats); 


