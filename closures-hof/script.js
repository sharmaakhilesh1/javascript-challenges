/**
 * HOF -
 * Higher order functions are the functions which receives function as argument or
 * return a function
 */
// Eg. 1
// const permissionsDB = [
//   {
//     role: "admin",
//     access: ["create", "read", "update", "delete"],
//   },
//   {
//     role: "auditor",
//     access: ["create", "read"],
//   },
//   {
//     role: "underwriter",
//     access: ["create", "read", "update"],
//   },
// ];

// const usersDB = [
//   {
//     userName: "Roger",
//     role: "admin",
//   },
//   {
//     userName: "Jhon",
//     role: "auditor",
//   },
//   {
//     userName: "Robert",
//     role: "underwriter",
//   },
// ];

// function authorize(role) {
//   const userPermissions = permissionsDB.find((permission) => {
//     if (permission.role === role) {
//       return permission.access;
//     }
//     return false;
//   });
//   if (userPermissions !== false) {
//     return userPermissions;
//   }
//   return "Invalid Role";
// }

// function authenticate(user) {
//   if (usersDB.find((user) => user.userName === user.userName)) {
//     return true;
//   }
//   return "Invalid User";
// }

// function letPerson(user, fn) {
//   const res = fn();
//   if (res !== true) {
//     return res;
//   }
//   return authorize(user.role);
// }

// const response = letPerson({ userName: "Roger", role: "admin" }, authenticate);

// console.log(response);

//Eg. 1 End

//Eg. 2

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// const higherOrderFunction = (operation, a, b) => operation(a, b);

// console.log(higherOrderFunction(add, 5, 6));
// console.log(higherOrderFunction(subtract, 5, 6));

//Eg. 2 End

/**
 * Closures : A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 * In other words,
 * A closure gives you access to an outer function's scope from an inner function.
 * In JavaScript, closures are created every time a function is created, at function creation time.
 */

//=============================================<>=====================================================
// const arr = [1, 2, 3, 4];
// for (var i = 0; i < arr.length; i++) {
//   (function (closureI) {
//     //or use let i = 0
//     setTimeout(function () {
//       console.log("I am at Index" + arr[closureI]);
//     });
//   })();
// }
//=============================================</>====================================================

// function func1() {
//   return 2;
// }
// function func2() {
//   return 4;
// }

// let a = (func1(), func2());

// console.log("a:", a); // 4

// const arr = ["one", "two", "three"];
// const str = "hello";

// console.log(arr.includes("one"));
// console.log(arr.includes("onetwo"));
// console.log(str.includes("ll"));

// const str1 = "Hello";
// const str2 = "World12345";

// function mergeString(str1, str2) {
//   let res = "";
//   const smallLength = str1.length < str2.length ? str1.length : str2.length;
//   const largeLength = str1.length > str2.length ? str1.length : str2.length;
//   let index;
//   for (index = 0; index < smallLength; index++) {
//     res += str1[index] + str2[index];
//   }
//   //way 1

//   //   if (str1.length > str2.length) {
//   //     while (index < largeLength) {
//   //       res += str1[index];
//   //       index++;
//   //     }
//   //   } else {
//   //     while (index < largeLength) {
//   //       res += str2[index];
//   //       index++;
//   //     }
//   //   }

//   //way 2

//   str1.length > str2.length
//     ? (res = res.concat(str1.substring(index)))
//     : (res = res.concat(str2.substring(index)));

//   return res;
// }

// console.log(mergeString(str1, str2));

/**
 *
 * flat the array without uing flat method
 */
// let arr = [
//   [1, 2],
//   [3, [[[10, 11, [12]]]], 4],
//   [5, 6],
// ];

// let res = [];

// function flatTheArray(arr, res) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flatTheArray(arr[i], res);
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }

// console.log(flatTheArray(arr, res));
