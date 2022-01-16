// notion document link -
// https://rohitdhatrak.notion.site/ES6-Assignment-Questions-533721cd486b4a1d87d4403089429a81

// doubt in - 1.3
// good qts - Qt2, 3.2, 1.8

// Qt1 - Try converting these codes to ES6 syntax-

// 1.1 qt -
// var aloo = 1;
// if (aloo == 1) {
//     var a = 2;
//     console.log(a);
// }
// console.log(aloo);

// 1.1 ans -
const aloo = 1;
if (aloo == 1) {
    const a = 2;
    console.log(a);
}
console.log(aloo);

// 1.2 qt -
// var multiply = function (x, y) {
//     return x * y;
// };

// 1.2 ans -
const multiply = (x, y) => x * y;

// 1.3 qt -
// var customer = {
//     name: "Bhaalo",
// };
// var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50,
// };
// var message =
//     "Hello " +
//     customer.name +
//     " wants to buy " +
//     card.amount +
//     " " +
//     card.product +
//     " for price of " +
//     card.unitprice +
//     " per piece";

// 1.3 ans -
const customer = {
    name: "Bhaalo",
};
const card = {
    amount: 20,
    product: "Aaalo",
    unitprice: 50,
};

const { name: customerName } = customer; // name variable giving me error
const { amount, product, unitprice } = card;

const message = `Hello ${customerName} wants to buy ${amount} ${product} for price of ${unitprice} per piece`;

// 1.4 qt -
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
//     CEO = Neog[0],
//     Mentor = Neog[2];

// 1.4 ans -
const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
const [CEO, , Mentor] = Neog;

// 1.5 qt -
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0];
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

// 1.5 ans -
const arr = ["MA", "TA", "PA", "CA"];
const [firstName, surname] = arr;
console.log(firstName);
console.log(surname);

// 1.6 qt -
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//     Aaloo: Aaloo,
//     Bhaloo: Bhaloo,
// };

// 1.6 ans -
const Aaloo = "Tasty";
const Bhaloo = "Cute";
const Obj = {
    Aaloo,
    Bhaloo,
};

// 1.7 qt -
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));

// 1.7 ans -
const A = 5;
const B = 10;
console.log(`Fifteen is ${A + B} and not ${2 * A + B}.`);

// 1.8 qt -
// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//         return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//         return num1 * num2;
//     },
// };

// 1.8 ans -
const arithmeticsObj = {
    sum: (num1, num2) => num1 + num2, // try to avoid arrow function in objects, as "this" keyword, points to the window object, instead of the local object. So use normal functions in objects. Read more...
    multiPly: (num1, num2) => num1 * num2,
};
const { sum, multiPly } = arithmeticsObj;

// 1.9 qt -
// var avengers = {
//     operation: "Assemble",
//     members: [
//         {
//             ironMan: "Tony Stark",
//         },
//         {
//             captainAmerica: "Steve Rogers",
//         },
//         {
//             blackWidow: "Natasha Romanoff",
//         },
//     ],
// };
// var operation = avengers.operation,
//     members = avengers.members;

// 1.9 ans -
const avengers = {
    operation: "Assemble",
    members: [
        {
            ironMan: "Tony Stark",
        },
        {
            captainAmerica: "Steve Rogers",
        },
        {
            blackWidow: "Natasha Romanoff",
        },
    ],
};

const { operation, members } = avengers;

// Qt2 - Convert ES6 to ES5
// const packIt = (...args) => console.log(args);
// packIt(1, 2, 3, 5, 5);

// Qt2 ans - // is function expression ES6+ feature or ES5
var packIt = function () {
    const array = [];
    for (let arg of arguments) {
        array.push(arg);
    }
    console.log(array);
};
packIt(1, 2, 3, 5, 5);

// Qt3 - Guess the output

// 3.1 qt -
// const hello = () => "Hello";
// const welcome = () => "Welcome";
// const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
// console.log(Hello, Welcome);

// 3.1 ans output -
// "Namaste Welcome" --> as we are giving default values in array destructuring, so Namaste is stored in hello but as Welcome is given no value, we assign default value which is welcome()

// 3.2 qt -
// const obj = {
//     aloo: 1,
//     bhallo: 2,
// };
// const { c: aloo = [2, 3, 4].push(5), aloo } = obj;
// console.log(aloo);

// 3.2 ans output -
// is there a syntax error here? instead of c:aloo should it be aloo : c ? NO SYNTAX ERROR that is allowed
// output is error, as we are declaring const variable aloo 2 times in the destructuring object, instead of const if we use var, then we won't get error as var allows variable redeclaration
