//Question 1 Return the sum of two numbers
//Create a function that takes two arguments as functions and return their sum.

//addition(3,2) -> 5
//addition(-3, -6) -> -9
//addition(7, 3) -> 10
// function addition(num1, num2) {
//     return num1 + num2
// }

// console.log(addition(3, 5));

/**
 * Question 2 Convert hours into seconds
 * Create a function that converts hours into seconds
   hoursintoSeconds(2) -> 7200
 * hoursintoSeconds(10) -> 36000
   hoursintoSeconds(24) -> 86400
 */

// function hoursintoSeconds(hour) {
//     return hour * 60 * 60;
// }

// console.log(hoursintoSeconds(2));
// console.log(hoursintoSeconds(10));
// console.log(hoursintoSeconds(24));

/**
 * Question 3 Calculate the perimeter of a rectangle
 * Create a function that takes length and width of a rectangle and return its perimeter
 * calcPerimeter(6, 7) -> 26
 * calcPerimeter(20, 10) -> 60
 * calcPerimeter(2, 9) -> 22
 * 
 */ 

// function calcPerimeter(length, width) {
//       return (length + width) * 2
// }

// console.log(calcPerimeter(6, 7));
// console.log(calcPerimeter(10, 20));
// console.log(calcPerimeter(2, 9));

/**
 * Question 4 Calculate the area of a triangle
 * Write a fucntion that takes the base and heigth of a triangle and return its area.
 * 
 * calcTriangleArea(3, 2) -> 3
 * calcTriangleArea(10, 10) -> 50
 * calcTriangleArea(20, 20) -> 200
 */

// function calcTriangleArea (base, height) {
//     return base * (height * .5)
// }

// console.log(calcTriangleArea(3, 2));
// console.log(calcTriangleArea(10, 10));
// console.log(calcTriangleArea(20, 20));

/**
 * Question 5 Extend a String
 * Write a function accepts a string and adds 'Frontend' onto the end of it.
 * 
 * appendFrontend('Apple') -> "AppleFrontend"
 * appendFrontend('Banana') -> "BananaFrontend"
 * appendFrontend('Orange') -> "OrangeFrontend"
 */

// function appendFrontend (string) {
//     return string + 'Frontend'
// }

// console.log(appendFrontend('Apple'));
// console.log(appendFrontend('Banana'));
// console.log(appendFrontend('Orange'));

/**Question 6 Greater than 100?
 * Given two numbers, return true if the sum of both numbers is greater than 100.
 * Otherwise return false.
 * 
 * sumGreaterThan100(20, 10) -> false
 * sumGreaterThan100(50, 100) -> true
 * sumGreaterThan100(100, -50) -> false
 */

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 >= 100 
// }

// console.log(sumGreaterThan100(20, 10));
// console.log(sumGreaterThan100(50, 100));
// console.log(sumGreaterThan100(100, -50));

/**
 * Question 7 Less than or equal to zero?
 * Write a function that accepts a number and returns true if it is less 
 * than or equal to zero, otherwise returns false.
 * 
 * lessThanOrEqualToZero(3) -> false
 * lessThanOrEqualToZero(0) -> true 
 * lessThanOrEqualToZero(-2) ->true
 * 
 * Tip: Use the less than or equal to operator 
 */

// function lessThanOrEqualToZero(num) {
//     return num <= 0;
// }
// console.log(lessThanOrEqualToZero(-5));

/**Question 8 Opposite Boolean
 * Given a boolean (true or false) return the opposite boolean
 * oppositeBoolean(true) -> false
 * oppositeBoolean(false) -> true

 */

// function oppositeBoolean(bool) {
//     return !bool;
// }

// console.log(oppositeBoolean(false));

/**
 * Question 9 Is not the number 0
 * Given ANY element, return true if it is NOT the number 0.
 * 
 * isNotZero(5) -> true
 * isNotZero(0) -> false
 * iszNotZero(null) -> true
 */

// function isNotZero(num) {
//     if (num !== 0) {
//         return true;
//     }
//     else {
//         return false
//     }
// }

// console.log(isNotZero(0));


// Use one line of Code
// function isNotZero(num) {
//     return num !== 0
// }

// console.log(isNotZero(5));

/**
 * Question 10 Calculate the remainder
 * Given two numbers, return their remainder when divided by each other.
 * 
 * calcRemainder(4, 2) -> 0
 * calcRemainder(7, 8) -> 7
 * calcRemainder(9, 8) -> 1
 * 
 */

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log(calcRemainder(4, 2));
// console.log(calcRemainder(7, 8));
// console.log(calcRemainder(9, 8));

/**
 * Question 11 Is the number Odd
 * Given two numbers, return true if the number is odd
 * 
 * isOdd(1) -> true
 * isOdd(2) -> false
 * isOdd(3) -> true
 */


// function isOdd(num) {
//     if (num % 2 === 0) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// console.log(isOdd(10));

// function isOdd(num) {
//     return num % 2 !== 0;
// }

// console.log(isOdd(10));

/**
 * Question 12. If a number is even, return 1 otherwise return -!
 * Create a function that takes a number argument and returns 1 if the number is even. If the number is Odd return -1
 * 
 * booleanInteger(1) -> -1
 * booleanInteger(2) -> 1
 * booleanInteger(5) -> -1
 */

// function booleanInteger (num) {
//     if (num % 2 === 0) {
//         return 1;
//     }
//     return -1;
// }

// console.log(booleanInteger(15));

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

// console.log(booleanInteger(1));
// console.log(booleanInteger(2));
// console.log(booleanInteger(5));

/**
 * Question 13 Check if a user is logged in AND subscribed
 * Create a function that takes in two strings. If the first string is equal to 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true, otherwise return false.
 * 
 * isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED) -> true
 * isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED) -> false
 * isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED) -> false
 */

// function isLoggedInAndSubscribed(loggedIn, subscribed) {
    //     if (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') {
        //         return true;
        //     }
        //     return false;
        // }
        
        // console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
        
        // function isLoggedInAndSubscribed(loggedIn, subscribed) {
            //     return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
            // }
            
            // console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
            
/**
* Question 14 Check if a user is logged in OR subscribed
* Create a function that takes in two strings. If the first string is equal to 
*
* 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true, otherwise return false.
* isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED) -> true
* isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED) -> false
* isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED) -> false
*  
*/


function isLoggedInAndSubscribed(loggedIn, subscribed) {
    return (loggedIn === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));