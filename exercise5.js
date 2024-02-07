// Part 1
console.log("Part 1")
// 1
// Write a function to get the lowest, 
// highest and average value in the array (with and without sort function).

//USING SORT
// function lha(array1) {
//     array1.sort(function(a,b){return a-b});
//     console.log(`min value = ${array1[0]}`); 
//     console.log(`max value = ${array1[array1.length-1]}`);
    
//     let sumArray1 = 0;
//     for (let i = 0; i <= array1.length-1; i++) {
//         sumArray1 = sumArray1 + array1[i]
//     } 
//     console.log(`average value = ${sumArray1/(array1.length)}`)
// }

// lha([12, 5, 23, 18, 4, 45, 32])

//NOT USING SORT
function statisticNumber(arr11) {
    let max = arr11[0];
    let min = arr11[0];
    let average = 0;
    let total = 0;
    for (let i = 0; i < arr11.length; i++) {
        if (arr11[i] > max) {
            max = arr11[i];
        }

        if (arr11[i] < min) {
            min = arr11[i];
        }

        total = total + arr11[i];
    }

    average = total/arr11.length;

    return {nilai_min: min, nilai_max: max, nilai_average: average}
}

console.log(statisticNumber([12, 5, 23, 18, 4, 45, 32]))

console.log("--------------------")

// 2
// Write a function that takes an array of words and returns a string by concatenating the words in the array, 
// separated by commas and - the last word - by an 'and'.
// Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

// function arraySort(fruit) {
//     fruit.sort();
//     for (let i = 0; i <= fruit.length-1; i++) {
//         if (i <= fruit.length-2) {console.log(`${fruit[i]}, `)}
//         else {console.log(`and ${fruit[i]}`)}
//     } 
// }

// arraySort(["apple", "banana", "cherry", "date"]);

function arrayToString(arr22) {
    let result = "";
    for (let i = 0; i < arr22.length; i++) {
        if (i === arr22.length-1) {
            result = result + "and "+ arr22[i];
        }
        else {
            result = result + arr22[i] + ", ";
        }
    }
    return result;
}

console.log(arrayToString(["apple", "banana", "cherry", "date"]));

console.log("--------------------")

// 3
// Write a function to split a string and convert it into an array of words
//USING SPLIT
// let splitString = "hello world"
// let newArray = splitString.split(" ")
// console.log(newArray);

//NOT USING SPLIT

function splitWord(str3) {
    let resArray = [];
    let temp = "";
    for(let i = 0; i < str3.length; i++) {
        if(str3[i] != " ")
        {temp = temp + str3[i]};
        if(str3[i] == " " || i === str3.length-1) {
            resArray.push(temp)
            temp = "";
        } 
    }
    
    return resArray;
}
console.log(splitWord("hello world"))

console.log("--------------------")

// 4
// Write a function to calculate each element in the same position from two arrays of integer. 
// Assume both arrays are of the same length.
// let array1 = [1,2,3]
// let array2 = [3,2,1]

function plusArray(arr1, arr2) {
    if (arr1.length != arr2.length) {
        console.log("invalid array")
    }
    else {let arr3 = [];
    for (i=0; i <= arr1.length - 1; i++) {
        str1 = arr1[i] + arr2[i]
        arr3.push(str1)
    } console.log(arr3)
}
}

plusArray([1,2,3],[3,2,1])

console.log("--------------------")

// 5
// Write a function that adds an element to the end of an array. However, 
// the element should only be added if it is not already in the array.

function checkArrayexist(arr, newElement) {
    let flag = false
    for (let i = 0; i < arr.length; i++) {
        if(newElement == arr[i]) {
            flag = true;
            break;
        }
    }

    if (flag == false) {
        arr.push(newElement);
    }

    return arr;
}

console.log(checkArrayexist([1,2,3,4],8));

console.log("--------------------")

// Part 2
console.log("Part 2")
// 1
function removeOddNumber(array4) {
    let result = [];
    for(let i = 0; i <array4.length; i++) {
        if (array4[i] % 2 === 1) {
            result.push(array4[i]);
        }
    }

    return result;
}

console.log(removeOddNumber([1,2,3,4,5,6,7,8,9,10]))
console.log("====================")

// 2
function maximumCapacity(maxSize, ...arr222) {
    let result = []
    for(let i = 1; i <= maxSize; i++) {
        result.push(arr222[i-1])
    }
    return result;
}
console.log(maximumCapacity(5, 5, 10, 24, 3, 6, 7, 8));

console.log("====================")

// 3
// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]

function combineArray(arr31, arr32) {
    let newArray = arr31
    for (i=0; i<=arr32.length-1; i++) {
        newArray.push(arr32[i])
    } return newArray
}

console.log(combineArray([1,2,3],[4,5,6]))

console.log("====================")

// 4
// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function dupVal(arr41) {
    let dupNums = [];
    for (let i=0; i<=arr41.length-1; i++) {
        let count = 0;
        for (let j=0; j<= arr41.length-1; j++) {
            if (arr41[i] === arr41[j]) {
                count++;
            }
            if (count >= 1 && !dupNums.includes(arr41[i])) {
                dupNums.push(arr41[i]);
            } 
        }
    } return dupNums
}

console.log(dupVal([1,2,2,2,3,3,4,5,5]))

// 5
// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
