// Write a code to display the multiplication table of given integer.

let number = 9;
for(let i = 1; i <= 10; i++) {
  var number2 = number * i;
  console.log(`${number} x ${i} = ${number2}`);
};

console.log("================");

// Write a code to check wether a string is a palindrome or not.

let name = "kasur ini rusak";
let res = "";

for(let i = name.length - 1; i>= 0; i--) {
    res = res + name[i];
};

console.log(res == name);

// Write a code to convert centimeter to kilometer.

// let centimeter = 300000;
// let kilometer = (centimeter/100000);
// console.log(`${centimeter} centimeter is equal to ${kilometer} kilometer`) ;

let numKm = 1;
let numCm = 100_000;
let num = 100_000;
let satuan = "cm";

if (satuan == "cm") {
    num = num / numCm + " km"
}

if (satuan == "km") {
    num = num / numKm;
}

console.log(num);


console.log("================");

// Write a code to format number as currency (IDR).

let nonRupiah = 500000;

// Write a code to remove the first occurrence of a given “search string” from a string.


// Write a code to swap the case of each character from string.

let str = "QUiCk bRoWn fOx";
let result2 = "";

for(let i = 0; i < str.length; i++) {
    if(str[i] == str [i].toLowerCase()) {
        result2 += str[i].toUpperCase();
    } else if(str[i] == str [i].toUpperCase()) {
        result2 += str[i].toLowerCase();
    } else {
        result2 += str[i];
    }
}

console.log(result2);