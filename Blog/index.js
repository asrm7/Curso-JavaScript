const Author = require("./Author");

const john = new Author("John Doe");

const post = john.writePost("Título do post", "Lorem ipsum dolor sic...");
post.addComment("Alex Medeiros", "Muito bom!");
post.addComment("Carlos Silva", "Muito interessante.");

console.log(john);
console.log(post);
