// 1- Counting Sheep - Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

const countingSheep = function(sheepNumber){
  if(sheepNumber === 0){
    return 'All sheep jumped over the fence';
  }
  return `${sheepNumber}: Another sheep jumped over the fence.` + countingSheep(sheepNumber -1)
}

console.log(countingSheep(8));

// 2- Power Calculator - Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = function(base, exponent){
    if(exponent === 1){
        return base;
    }
    return base * powerCalculator(base, (exponent -1));
}
 console.log(powerCalculator(11, 5));

//  3- Reverse String - Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(string){
    if(string.length === 1){
        return string[0]
    }
    return (string.charAt(string.length -1) + reverseString(string.slice(0, -1)))
}
console.log(reverseString('thinkful'));

// 4 - nth Triangular Number - Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triangularNumber = function(number){
    if(number === 1){
        return number;
    }
    return number + triangularNumber(number -1);
}
console.log(triangularNumber(8));

// 5-  String Splitter - Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

const stringSplitter = function(input, separator){
    if(input.length <= 1){
        input [0] === separator ? input [0] : ','
    }
    const output = stringSplitter((input.substring(1, input.length -1 )), separator)
    return output
}
console.log(stringSplitter('17/08/2020', '/'));

// 6. Fibonacci - Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fib = function(number){
    if(number === 2){
        return [1,1]
    }
    let fibArray = fib(num -1)
    fibArray.push(fibArray[fibArray.length -1] + fibArray[fibArray.length -2])
    return fibArray
}
console.log(fib(13));

// 7- Factorial - Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

const factorial = function(number){
    if(number ===1){
        return number
    }
    return number * factorial(number -1)
}
console.log(factorial(8));

// 8 and 9 - Find a way out of the maze - You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

const 