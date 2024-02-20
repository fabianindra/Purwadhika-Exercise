// Create a function to convert Excel sheet column title to its corresponding column number.

function excelSheet(x) {
    let n = x.split("");
    let sheetNumber = 0;
    let alphabetNum = 25;
    let roll = 0;
    let count = 0;

    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]


    for (let i = n.length - 1; i >= 0; i--) {
        for (let j = 0; j <= alpha.length-1; j++) {
            if ((count >= 1) && (n[i] == alpha[j])) {
                sheetNumber = sheetNumber + number[j];
                roll = roll + number[j];
                count++;
            }
            else if ((count == 0) && (n[i] == alpha[j])) {
                sheetNumber = sheetNumber + number[j];
                count++;
            }
        } 
    } 
    // console.log(`roll : ${roll}`)
    // console.log(count)
    return sheetNumber + (alphabetNum*(roll))
}


console.log(excelSheet("AZ"))

// Given a non-empty array of integers nums, every element appears twice except for one. Find that 
// single one.

function singleOne(a) {
    let result;
    for (let i = 0; i <= a.length-1; i++) {
        let flag = true;
        for (let j = 0; j < a.length-1; j++) {
            if (i != j && a[i] == a[j]) {
                flag = false;
                break
            }
        }

        if (flag) {
            result = a[i]
            break
        }
    } return result
}
console.log(singleOne([4,2,2,3,1,3,1]))

/*
● Given two strings s and t, return true if t is an anagram of s, and false otherwise.
● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.
● Example 1:
○ Input: s = "anagram", t = "nagaram"
○ Output: true
● Example 2:
○ Input: s = "rat", t = "car"
○ Output: false
*/

function anagram(s,t) {
    let sortS = s
    .split("")
    .sort()
    .join("");
    let sortT = t
    .split("")
    .sort()
    .join("");


    console.log(sortS === sortT);
}

anagram("nagaram", "anagram");

/*
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 
steps. In how many distinct ways can you climb to the top?
● Example 1:
○ Input: n = 2
○ Output: 2
○ Explanation: There are two ways to climb to the top.
■ 1. 1 step + 1 step
■ 2. 2 steps
● Example 2:
○ Input: n = 3
○ Output: 3
○ Explanation: There are three ways to climb to the top.
■ 1. 1 step + 1 step + 1 step
■ 2. 1 step + 2 steps
■ 3. 2 steps + 1 step
*/