// JavaScript: Array.concat()

let people1 = [
  {
    name: "VedaGna",
  },
  {
    name: "Renu",
  },
];
let people2 = [
  {
    name: "Hindu",
  },
  {
    name: "Gnapika",
  },
];


// people1.forEach(function(person){
//     console.log(person.name);
// })


people1.concat(people2).forEach(function(person){
    console.log(person.name);
})