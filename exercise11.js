//1

function majorityElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 1;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                sum += 1
            }

            if (sum > arr.length /2) {
                return arr[i];
            }
        }
    }

    return -1
}

console.log(majorityElement([3,2,3]))

//2

function romanNumeral(chars) {
    let romanNumber = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CM: 900,
        M: 1000,
    }

    let result = 0
    for (let i = 0; i < chars.length; i++) {
        
        let thisChar = chars[i];
        let nextChar = chars[i+1];
        
        if(romanNumber[thisChar] >= romanNumber[nextChar]) {
            result += romanNumber[thisChar];
        }
        else {
            result += romanNumber[thisChar + nextChar];
            i = i+1;
        }
    }

    return result
}

console.log(romanNumeral("MCMXCIV"))


//3

function pascaltriangle(height) {
    let result = [];
    for(let i = 0; i < height; i++) {
        let row = []
        for(let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.push(1);
            }
            else {
            row.push(result[i-1][j-1] + result[i-1][j])
        }
        }
        result.push(row)
    }

    return result;
}

console.log(pascaltriangle(5));


//4

function maximumProfit(stocks) {
    let maxProfit = 0;
    for(let i = 0; i < stocks; i++) {
        for(let j = i+1; j < stocks.length; j++) {
            if(stocks[j] - stocks[i] > maxProfit) {
                maxProfit = stocks[j] - stocks[i];
            }
        }
    }
    return maxProfit;
}

console.log(maximumProfit([]))