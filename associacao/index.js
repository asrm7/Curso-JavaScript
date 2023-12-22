const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("7 de Setembro", 99, "Centro", "Sao Fidelis", "RJ");
const john = new Person("john Doe", addr);

console.log(john);
console.log(john.address.fullAddress());
