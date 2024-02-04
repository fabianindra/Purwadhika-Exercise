// 1
//Create a function that can create a triangle pattern according to the height we provide 

function triangle(height) {
    let counter = 1
    // looping jumlah baris:
    for (let i = 1; i <= height; i++) {
        let row = "";
        // looping jumlah item based on baris keberapa:
        for (let j = 1; j <=i; j++) {
            if(counter<10) {
                row += "0" + counter + " ";
            } else row += counter + " ";
            counter++
        }
        //print
        console.log(row);
    }
}

triangle(4)

console.log("================");

//2
//Create a function that can loop the number of times according to the input we provide, 
//and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz",
//multiples of 3 and 5 with "FizzBuzz".

//Parameters : n → total looping

// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n) {
    for (let i = 1 ;  i <= n ; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0 ) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else console.log(i) }
return ""}

let fizzBuzzNum = fizzBuzz(16);
console.log (fizzBuzzNum);

console.log("================");

//3
//Create a function to calculate Body Mass Index (BMI)
//Formula : BMI = weight (kg) / (height (meter))2
//Parameters : weight & height

//RETURN VALUE
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”

function BMI(weight1, height1) {let bmi1 = weight1 / (height1*height1)
    if (bmi1 < 18.5) {return "less weight"}
    else if(bmi1 >= 18.5 && bmi1 < 25) {return "ideal"}
    else if(bmi1 >= 25 && bmi1 < 30) {return "overweight"}
    else if(bmi1 >= 30 && bmi1 < 40) {return "very overweight"}
    else if(bmi1 > 40) {return "obesity"}
    else {return "data invalid"}
    }

let bodyMassIndex = BMI(63, 1.71);
console.log(bodyMassIndex);

console.log("================");

//4
//Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
//Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

let array3 = [1,2,3,4,5,6,7,8,9,10];

function removeEven(array3) {
    return array3.filter(n => n % 2 !== 0);
}

let oddNum = removeEven(array3)
console.log(oddNum);

console.log("================");

//5
//Write a function to split a string and convert it into an array of words

let splitString = "hello world"
let newArray = splitString.split(" ")
console.log(newArray);