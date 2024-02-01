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

console.log("================");

// Write a code to convert centimeter to kilometer.

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
let rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
}).format(nonRupiah);

console.log(rupiah);

console.log("================");

// Write a code to remove the first occurrence of a given “search string” from a string.

let string1 = "Hello world";
let searchString1 = "ell";

let string2 = string1.replace(searchString1, "");

console.log(string2);

console.log("================");

// Write a code to capitalize the first letter of each word in a string

let capitalize = "hello world"
let word = capitalize.split(" ")

for(let i = 0; i<=word.length-1; i++) {
    word[i] = word[i][0].toUpperCase()
    + word[i].slice(1)
}

let joined = word.join(" ")
console.log(joined);

console.log("================");

// Write a code to reverse a string.

let str2 = "hello"
let res2 = ""

for(let i = str2.length - 1; i>= 0; i--) {
    res2 = res2 + str2[i];
};

console.log(res2);

console.log("================");

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

console.log("================");

// Write a code to find the largest of two given integers
// example ; num1 = 42, num2 = 27 -> 42

let int1 = 42;
let int2 = 27;

if(int1>int2) {
    var int3 = int1
}
else if(int1<int2) {
    var int3 = int2
}
else {var int3 = "the numbers are equal"};

console.log(int3);

console.log("================");

// Write a conditional statement to sort three numbers
// example : num 1 = 42, num2 =27, num3 = 18 -> 18,27,42

let num11 = 42;
let num22 = 27;
let num33 = 18;

if (num11>num22 && num11>num33) {
    if (num22>num33) {
        console.log (`${num33}, ${num22}, ${num11}`);
    }
    else console.log (`${num22}, ${num33}, ${num11}`);
}
else if (num22>num11 && num22>num33) {
    if (num11>num33) {
        console.log (`${num33}, ${num11}, ${num22}`);
    }
    else console.log (`${num11}, ${num33}, ${num22}`);
}
else if (num33>num22 && num33>num11) {
    if (num11>num22) {
        console.log (`${num22}, ${num11}, ${num33}`);
    }
    else console.log (`${num11}, ${num22}, ${num33}`);
}

console.log("================");

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// example : "hello" -> 1

let data = "hello";
let dataType = typeof(data);

if(dataType == "string") {
    var dataCheck = 1
}
if(dataType == "number") {
    var dataCheck = 2
}
else {
    3
};

console.log(dataCheck);

console.log("================");

// Write a code to change every letter a into * from a string of input
//example :'An apple a day keeps the doctor away' -> `*n *pple * d*y keeps the doctor *w*y`

let kalimat = "An apple a day keeps the doctor away";
let kalimatBaru =  kalimat.replaceAll("a","*");
console.log(kalimatBaru);
