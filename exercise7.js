// Create a function to check if two objects are equal
let objectA = {
    a: 1,
};

let objectB = {
    a: 1,
}

function isEqual(a, b) {
    return objectA.a[0] === objectB.a[0]
};

console.log(isEqual(objectA, objectB))

console.log("===================")

// Create a function to get the intersection of two objects

let object1 = {
    a: 1,
    b: 2
};

let object2 = {
    a: 1,
    c: 3,
}

function interObj(obj1, obj2) {
    let result = {

    }
    let objLength1 = Object.entries(obj1);
    let objLength2 = Object.entries(obj2);

    for(let i = 0; i < objLength1.length; i++) {
        for(let j = 0; j < objLength2.length; j++) {
            if(objLength1[i][0] == objLength2[j][0]) {
                result = { ...result , [objLength1[i][0]] : [objLength1[i][1]]};
            }
        }
    } return result
}

console.log(interObj(object1, object2))

console.log("===================")

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email

function mergeArray(array1, array2) {
    let merged = [...array1, ...array2];
    let unique = {};
    let result = [];
    
    for (let i in merged) {
        objName = merged[i]["name"];
        unique[objName] = merged[i];
    }

    for (let data in unique) {
        result.push(unique[data]);
    }
    return result;
}
console.log(mergeArray(
    [
        {name : 'Student 1', email : 'student1@mail.com'}, 
        {name : 'Student 2', email : 'student2@mail.com'}
    ],
    [
        {name : 'Student 1', email : 'student1@mail.com'},
        {name : 'Student 3', email : 'student3@mail.com'}
    ]
))


console.log("===================")

// Create a function that can accept input as an array of objects and switch all values into property and property into value

function flipObject(arr) {
    let result = []

    for (let i of arr) {
        let newObj = {};
        for (let key in i) {
            newObj[i[key]] = i[key];
        }

        result.push(newObj);
    }
    return result;
}

console.log(flipObject([{name: "david", age: 20}]))

console.log("===================")

// Create a function to find a factorial number using recursion

function factorial(num) { 
    if (num === 0 || num === 1) { 
        return 1; 
    } else { 
        return num * factorial(num - 1); 
    } 
}

console.log(factorial(5))

console.log("===================")

// Exercise - Shooting Game