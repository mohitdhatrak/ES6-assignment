// qts list - https://github.com/neogcamp/build/blob/main/build-logic/002_functions.md

// 1 - Easy

// 1.1 - Given a and b, your function should return the value of a^b.
const power = (a, b) => a ** b;
console.log(power(2, 3)); // 8

// 1.2 - Given length of a regular hexagon, your function should return area of the hexagon.
const areaOfHexagon = (side) => (3 * Math.sqrt(3) * side ** 2) / 2;
console.log(areaOfHexagon(10).toFixed(2)); // 259.81

// 1.3 - Given a sentence, your functions should return the number of words in the sentence.
const numOfWords = (string) => string.split(" ").length;
console.log(numOfWords("We are neoGrammers")); // 3

// 1.4 - Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
const findMin = (...numbers) => Math.min(...numbers);
console.log(findMin(3, 5)); // 3
console.log(findMin(3, 5, 9, 1)); // 1

// 1.5 - Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
const findMax = (...numbers) => Math.max(...numbers);
console.log(findMax(3, 5)); // 5
console.log(findMax(3, 5, 9, 1)); // 9

// 1.6 - Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.
const typeOfTriangle = (angle1, angle2, angle3) => {
    if (angle1 === angle2 && angle1 === angle3) return "Equilateral Triangle";
    else if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3)
        return "Isosceles Triangle";
    else return "Scalene Triangle";
};
console.log(typeOfTriangle(30, 60, 90)); // Scalene Triangle

// 2 - Medium

// 2.1 - Given an array, your function should return the length of the array.
const arrayLength = (array) => array.length;
console.log(arrayLength([1, 5, 3, 7, 8])); // 5

// 2.2 - Given an array and an item, your function should return the index at which the item is present.
const indexOf = (array, element) => array.indexOf(element);
console.log(indexOf([1, 6, 3, 5, 8, 9], 3)); // 2

// 2.3 - Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
const replace = (array, numToBeReplaced, newNum) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === numToBeReplaced) {
            array[index] = newNum;
        }
    }
    return array;
};
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10)); // [1, 10, 3, 10, 6, 8]

// 2.4 - Given two arrays, your function should return single merged array.
const mergeArray = (array1, array2) => [...array1, ...array2];
console.log(mergeArray([1, 3, 5], [2, 4, 6])); // [1, 3, 5, 2, 4, 6]

// 2.5 - Given a string and an index, your function should return the character present at that index in the string.
const charAt = (string, index) => string[index];
console.log(charAt("neoGcamp", 4)); // "c"

// 2.6 - Given two dates, your function should return which one comes before the other.
const minDate = (date1, date2) => {
    const date1Arr = date1.split("/");
    const date2Arr = date2.split("/");
    const [day1, month1, year1] = date1Arr;
    const [day2, month2, year2] = date2Arr;
    if (year1 !== year2) return Number(year1) < Number(year2) ? date1 : date2;
    else if (month1 !== month2)
        return Number(month1) < Number(month2) ? date1 : date2;
    return Number(day1) < Number(day2) ? date1 : date2;
};
console.log(minDate("02/05/2021", "24/01/2021")); // "24/01/2021"

// 3 - Advanced

// 3.1 - Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.
const encodeString = (string, rightShiftNum) => {
    let wordsArray = string.split(" ");
    if (rightShiftNum >= 26) {
        rightShiftNum = rightShiftNum % 26; // 26 is the number of alphabets in english
    }

    for (let i = 0; i < wordsArray.length; i++) {
        let lettersArray = wordsArray[i].split("");
        for (let j = 0; j < lettersArray.length; j++) {
            if (
                (lettersArray[j].charCodeAt() >= 97 && // 97, 122, 65, 90 are the ASCII values of a, z, A, Z
                    lettersArray[j].charCodeAt() <= 122 - rightShiftNum) ||
                (lettersArray[j].charCodeAt() >= 65 &&
                    lettersArray[j].charCodeAt() <= 90 - rightShiftNum)
            ) {
                lettersArray[j] = String.fromCharCode(
                    lettersArray[j].charCodeAt() + rightShiftNum
                );
            } else {
                lettersArray[j] = String.fromCharCode(
                    lettersArray[j].charCodeAt() - 26 + rightShiftNum
                );
            }
        }
        wordsArray[i] = lettersArray.join("");
    }

    return wordsArray.join(" ");
};
console.log(encodeString("neogcamp", 2)); // pgqiecor

// 3.2 - Given a sentence, return a sentence with first letter of all words as capital.
const toSentenceCase = (string) => {
    let wordsArray = string.split(" ");
    for (let index = 0; index < wordsArray.length; index++) {
        let eachLetter = wordsArray[index].split("");
        eachLetter[0] = eachLetter[0].toUpperCase();
        wordsArray[index] = eachLetter.join("");
    }
    return wordsArray.join(" ");
};
console.log(toSentenceCase("we are neoGrammers")); // We Are NeoGrammers

// 3.3 - Given an array of numbers, your function should return an array in the ascending order.
const sortArray = (array) => array.sort((a, b) => a - b);
console.log(sortArray([100, 83, 32, 9, 45, 61])); // [9, 32, 45, 61, 83, 100]

// 3.4 - Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
const reverseCharactersOfWord = (string) => {
    let wordsArray = string.split(" ");
    let requiredString = "";
    for (let word of wordsArray) {
        let reversedWord = word.split("").reverse().join("");
        requiredString += `${reversedWord} `;
    }
    return requiredString;
};
console.log(reverseCharactersOfWord("we are neoGrammers")); // ew era sremmarGoen
