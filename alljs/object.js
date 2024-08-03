//Object
  //In JavaScript, an object is a collection of key-value pairs where each key is a string (or symbol) and the value can be any type, including other objects, functions, or primitives. 
  //Objects are a fundamental data structure in JavaScript and are used to represent and organize complex data.

  //e.g
  const person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  