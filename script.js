// JavaScript: Create a Shallow Copy of an Array with Slice || JavaScript Object Cloning || Deep vs Shallow Copy

const person_1 = {
  id: 1,
  name: "VedaGna",
  address: {
      floatNo: 475
  },
};

// using spead operator
// const person_2 = {...person_1};

// using assign operator
// const person_2 = Object.assign({}, person_1)

// using JSON.stringfy and JSON.parse
const person_2 = JSON.parse(JSON.stringify(person_1))



//change the id value of person_2
// person_2.id = 2;
person_2.address.floatNo =  500;

console.log(person_1);
console.log(person_2);
