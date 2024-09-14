class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    print(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const s1 = new Student('John', 25);
s1.print();

// Constuctor Function
function StudentDetails(name, age){
    this.name = name;
    this.age = age;
}

StudentDetails.prototype.print = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

const s2 = new StudentDetails('Sonu Choudhary', 30);
s2.print();

// INHERITANCE
class Teacher {
    constructor(name, channel, likes){
        this.name = name;
        this.channel = channel;
        this.likes = likes;
    }
    print(){
        console.log(`Name: ${this.name}, Channel: ${this.channel}, Likes: ${this.likes}`);
    }
    likesIncrement(){
        this.likes++;
        console.log(`Likes: ${this.likes}`);
    }
}
class YouTubeTeacher extends Teacher{
    constructor(name, channel, likes, subscriber){
        super(name, channel, likes);
        this.subscriber = subscriber;
    }
    subscriberCount(){
        this.subscriber++;
        console.log(`YouTube channel name is : ${this.channel} and subscriber count is : ${this.subscriber}`);
    }
}

const t1 = new Teacher('John', 'John Channel', 100);
const ytTeacher = new YouTubeTeacher('Sonu Choudhary', 'Tech Adda', 100, 1000);
ytTeacher.print();
ytTeacher.subscriberCount();

class Calculator{
    constructor(){
        this.result = 0;
    }
    add(num){
        this.result += num;
        return this;
    }
    substract(num){
        this.result -= num;
        return this;
    }
    multiply(num){
        this.result *= num;
        return this;
    }
    divide(num){
        if(num === 0){
            console.log('Cannot divide by zero');
        }else{
            this.result /= num;
        }
        return this;
    }
    resultValue(){
        return this.result;
    }
}

const calc = new Calculator();
const result = calc.add(50).substract(5).multiply(2).divide(2).resultValue();
console.log(result);

// Combining both Inheritance and Polymorphism function
class Shape{
    constructor(){
        this.Area = 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        this.Area = 3.14 * this.radius * this.radius;
        return this.Area;
    }
}
class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }
    calculateArea(){
        this.Area = this.side * this.side;
        return this.Area;
    }
}

const c1 = new Circle(5);
const s3 = new Square(5);
console.log(c1.calculateArea());
console.log(s3.calculateArea());