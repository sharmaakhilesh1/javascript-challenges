/**
 * call():
 * 1.to call a method-under the hood works every function object has call() as a property
 * 2.to borrow a method from any other object
 */
function myFunc() {
  return "hellooooo!";
}

console.log(myFunc.call());

function add(num1, num2) {
  return num1 + num2;
}

let result = add(2, 5);
console.log("Result 1:", result);

result = add.call("anything", 2, 5); //anything because we are not using this refrence parameter
console.log("Result 2:", result);

result = add.call(this, 2, 5); //mostly you will look this, but as we are not using this reference so pass anything
console.log("Result 3:", result);

//main use of call() is to borrow a method from another object
const wizard = {
  name: "John",
  heath: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: "Robin",
  health: 30,
};

console.log("archer object - 1:", archer);
wizard.heal.call(archer, 50, 30);
console.log("archer object - 2 :", archer);

/**
 * apply(): it completely similar to call() - only difference
 * In apply method we pass parameter in an array
 */

wizard.heal.apply(archer, [100, 200]);
console.log("archer object - 3 :", archer);

/**
 * bind(): is usefull to call a funcion later on with a certain context or certain this
 * bind return a new method - so passing the parametr for that method which you are binding is not mandatory
 */

const healArcher = wizard.heal.bind(archer, 1000, 2000);
healArcher();
console.log("archer object - 4 using bind with parameter :", archer);
//without parameter - or you can pass one parameter leave second anything possible,
//and pass the parameter later at the time of calling

const healArcher2 = wizard.heal.bind(archer);
healArcher2(10000, 20000);
console.log(
  "archer object - 4 using bind passed parameter at the time of calling :",
  archer
);

//another example of bind()
function multiply(a, b) {
  return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);
console.log("Multiply by 2 :", multiplyByTwo(10));

const multiplyByFive = multiply.bind(this, 5);
console.log("Multiply by 5 :", multiplyByTwo(10));

//This we can also achive using currying

const multiply2 = (num1) => (num2) => num1 * num2;

const multiplyByTwo2 = multiply2(2);
console.log("Multiply by 2 using currying:", multiplyByTwo(10));

const multiplyByFive2 = multiply2(5);
console.log("Multiply by 5 using currying:", multiplyByTwo(10));
