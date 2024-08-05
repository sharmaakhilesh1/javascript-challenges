/**
 * objects are pass by reference in javascript
 * array - also an object in javascript - to know its an array use myArray.isArray()
 * so you can not create copy of objects by simply assignment operator
 */

var a = 5;
var b = a; //pass by value

b++; //it will not affect a

let obj1 = {
  username: "yao",
  password: "123",
};

let obj2 = obj1; // so here obj2 is just an Alias of obj1

obj2.password = "aaaeeooo"; //thi change will also reflect in obj1

console.log("obj1 :", obj1);
console.log("obj2 :", obj2);

//so to create a clone of object we can use Object.assign(), spread operator ...obj
//but it will only copy the outemost object, see eg.

let obj = {
  a: "a",
  b,
  c: {
    deep: "Hey! you can not copy me by using Object.assign() or {...myObj} spread opearator😏 but can copy with JSON.parse(JSON.stringify(obj))😪",
  },
};

let clone = Object.assign({}, obj);
let clone2 = { ...obj };

//to clone completely use JSON.parse(JSON.stringyfy(obj)) //but it is costly operation
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "Heyyyyyyyyy stop dont do this";

console.log(obj);
console.log(clone);
console.log(clone);
console.log(superClone);

/**
 * Functions are also object in javascript
 * will see the diffrent ways to write functions
 * and also functions are first class citizens is javascript bcs of that we call javascript is a functional programming
 * It also a Object oriented programming as well
 */

//function declaration
function first() {
  return 1;
}

//function expression

const second = function () {
  // "const second = function myFunc{return 2}" //but you will not be able to access myFunc it can only be called from their own context
  return 2;
};
//below are the function expression but this we also called "Arrow function"
const third = () => 3;
//or
const fourth = () => {
  return 3;
};

//Using Function constructor
const four = new Function("arg1", "arg2", "return arg1+arg2"); //here last parameter is function body and all before that will be the argumnets for the created function
console.log(four(3, 4));
//inside object

const myObj = {
  second: function () {
    return 2;
  },
};

//new syntax:
const myObj2 = {
  second() {
    return 2;
  },
};

//default parameter in function

const power = (x, y = 1) => x ** y;
console.log("x = 5 :", power(5));
console.log("x = 5 and y = 3 :", power(5, 3));

const power2 = (x, y) => x ** y;
console.log("x = 5 , y dont have default value:", power2(5)); //this is not allowed in c, c++, python, java // in these languages you need to pass two parameter if a function is expecting two argumnets
console.log("x = 5 and y = 3 :", power2(5, 3));

//Interesting part in javascript we can add properties to functions
function whooooo() {
  console.log("haaaaa");
}

whooooo.yell = "ahhhhhh";

console.log(whooooo);
