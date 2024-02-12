//1

let userData = [
    {
      name: "Rei",
      email: "rei@gmail.com",
      age: 22,
      score: 65,
    },
    {
      name: "Kai",
      email: "kai@ymail.com",
      age: 32,
      score: 52,
    },
    {
      name: "Luffy",
      email: "luffy@gmail.com",
      age: 17,
      score: 43,
    },
    {
      name: "Zoro",
      email: "zoro@hotmail.com",
      age: 28,
      score: 90,
    },
  ];

function calculateStudents(data) {
    let result = {
        score: {
            highest:data[0].score,
            lowest:data[0].score,
            average:0,
        },
        age: {
            highest:data[0].age,
            lowest:data[0].age,
            average:0,
        }
    }
    let totalScore = 0;
    let totalAge = 0;
    for(let i = 0; i<data.length; i++) {
        if (data[i].score > result.score.highest) {
            result.score.highest = data[i].score;
        }
        if (data[i].score < result.score.lowest) {
            result.score.lowest = data[i].score;
        }
        if (data[i].age > result.age.highest) {
            result.age.highest = data[i].age;
        }
        if (data[i].age < result.age.lowest) {
            result.age.lowest = data[i].age;
        }

        totalScore += data[i].score;
        totalAge += data[i].age;
     
    }
    result.score.average = Math.round(totalScore / data.length);
    result.age.average = Math.round(totalAge / data.length);

    return result; 
}

console.log(calculateStudents(userData))

//2

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

class Transaction {
    constructor() {
        this.total = 0;
        this.products = [];
    }

    addToCart(productObj, qty) {
        let dataTransaction = {
            product:productObj,
            qty:qty,
            total:productObj.price * qty,
        };
        this.products.push(dataTransaction);
    };

    showTotal() {
        for(let i = 0; i < this.products.length; i++) {
            this.total += this.products[i].total;
        };
        return this.total;
    };

    checkout() {
            let readableTransaction = this.products.map((item) => {
            return {
                total:item.total,
                product:item.product.name,
                qty:item.qty,
                }
            });
        return {
            cart : readableTransaction,
            total : this.total,
        };
    };
}

let msiRTX3060 = new Product("msi RTX 3060", 9000000);
let iphone15 = new Product("iPhone 15", 20000000);

let transaction001 = new Transaction();

transaction001.addToCart(msiRTX3060, 3);
transaction001.addToCart(iphone15, 1);

console.log(transaction001.products);

console.log(transaction001.showTotal());

console.log(transaction001.checkout());