class User {
    constructor(name, email, age, score) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = score;
    }
    get getName() {
        return this.name;
    }
    get getEmail() {
        return this.email;  
    }
    get getAge() {
        return this.age;
    }
    get getScore() {
        return this.score;
    }
}

const user1 = new User("David", "david@gmail.com", 28, 78);
const user2 = new User("Iki", "iki@gmail.com", 24, 89);
const user3 = new User("Damon", "damon@yahoo.com", 41, 88);

function object(obj) {
    let maxScore = 0;
    let minScore = 0
    let averageScore = 0;
    let maxAge = 0;
    let minAge = 0;
    let averageAge = 0;

    for(let i = 0; i < obj.length; i++) {
        if (obj[i].score > maxScore) {
            maxScore = obj[i].score
        }
        if (obj[i].score > minScore) {
            minScore = obj[1].score
        }
        averageScore += obj[i].score
    }
    averageScore = averageScore / obj.length;
    
    for(let i = 0; i < obj.length; i++) {
        if (obj[i].age > maxAge) {
            maxAge = obj[i].age
        }
        if (obj[i].age > minAge) {
            minAge = obj[1].age
        }
        averageAge += obj[i].age
    }
    averageAge = averageAge / obj.length;

    console.log("SCORE");
    console.log(maxScore, minScore, averageScore);
    console,log("AGE");
    console.log(maxAge, minAge, averageAge);
}

object(User);
