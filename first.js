console.log("Hello Bow Tied Treebeard, you are still connected with your external js file");








/*

let arr = [1,2,3,4,21,22,23,24];
let redarr = arr.reduce((acc,num) => acc+num, 100);


let arr = [1,2,3,4,21,22,23,24];
let newarr = arr.filter(num => num>10);


let arr = [1,2,3,4];
let newarr = arr.map(num => num*10);

let x = 2;

const add = (y) => {
    return x+=y;
};

const promise = new Promise((resolve,reject)=>{
    if(false){
        resolve("it worked!");
    }
    else{
        reject("it did not work");
    }
});

promise.then(result => result + " hahaha");


let mul = (x) => (y) => console.log(x*y);
let mul10 = mul(10);
mul10(7);
mul10(8);
mul10(9);
mul10(10);


let mul = function(x,y){
    console.log(x*y);
}
let mulBy10 = mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);





let f1= (gf) => (f) => (s) => console.log(`${gf}--${f}--${s}`);


function f1(gf){
    return function(f){ 
        return function(s){
            console.log(`${gf}--${f}--${s}`);
            return 'first comes the '+gf+'. He bores the '+f+', who then bores the '+s+'.';
    } 
    }
}

function change(id){
    id.innerHTML = "BOOBIES";
}











var lis = document.querySelectorAll('li');
for (var i=0; i<lis.length;i++){
    lis[i].addEventListener('click',function(){
        this.style.color='pink';
    });
}





var list_of_hobbies = document.getElementsByClassName("hobby");
console.log(list_of_hobbies);

var list = document.querySelector(".hobby");
console.log(list);

document.querySelectorAll("p");
document.querySelectorAll(".hobby");

var age = prompt("Please enter your age: ");

if(age>20){
    alert("Great. You are a valid user/visitor");
}
else{
    alert("Try again");
}

console.log("");
console.log("");
console.log("<=== End of Program ===>");

console.log("");
console.log("<=== Start of Program ===>");


document.title = 12345;
document.all[5].textContent = 'tttiiitttllee'; 
console.log(document);
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.body);
console.log(document.head);
console.log(document.title);
console.log(document.all);
console.log(document.all[5]);
console.log(window);
console.log(document.__proto__);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"); */


















/*
try{
    console.log(a);
} 
catch{
    console.log("you fucked up somewhere, bro.");
}


class Parent{
    live(){
        console.log("Iran");
    }
}
class Child extends Parent{
    live(){
        console.log("India");
    }
}
var ob = new Child();

ob.live();



class Fruits
{
    constructor(color)
    {
        this.color = color;
    }
    print(size)
    {
        console.log(size);
    }
    print()
    {
        console.log("hello");
    }
    print(s1,s2)
    {
        console.log(s1+s2);
    }
}

let ob1 = new Fruits("red");
ob1.print(10);
ob1.print();
ob1.print(12,12); 

class Father{
    constructor(name){
        this.name=name;
    }
    display(){console.log("I am " +this.name);}
    display(vehicle){console.log("I am driving " +vehicle);}
}
var alex= new Father('alex');

alex.display('bike');


class Fruits
{
    constructor(color)
    {
        this.color = color;
    }
    print()
    {
        console.log(this);
    }
}
class Apple extends Fruits
{
    constructor(color, type)
    {
        super(color);
        this.type = type;
    }
    print()
    {
        super.print(this);
    }
}

let obj = new Apple("red","apple");
obj.print();

let ob1 = new Fruits("red");
ob1.print();
//constructor allows you to set properties at the time of creation.



class Box{
    constructor(length){
        this.length = length;
    }
    display(){
        console.log(this);
    }
}

class SmallBox extends Box{
    constructor(length,breadth){
        super(length);
        this.breadth=breadth;
    }
    display(){
        super.display(this);
    }
}

let ob2 = new SmallBox(16,30);
ob2.display();


Fruit{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    grow(){
        console.log(this.color+" fruit growing...");
    }
}

class Apple extends Fruit{
    constructor(name,color,type){
        super(name,color);
        this.type=type;
    }
    eat(){
        console.log(this.name+" eating...");
    }
}

let TastyApple = new Apple('TastyApple','Red','big');
TastyApple.grow();
TastyApple.eat();


var parent ={
    name: "Father",
    sing(){
        console.log("singing");
    },
    eat: function(){
        console.log("eating");
    },
    drink: ()=>{
        console.log("drinking");
    }
};

var child = {
    name: "Son",
    eat(){
        console.log("eating")
    }
};

child.__proto__=parent;

for(let p in child)
{
    console.log(p + " " + child.hasOwnProperty(p));
}



class Box
{
    constructor(length)
    {
        this.length = length;
        console.log("constructor called");
    }
    display(){
        console.log(this);
    }
}
let obj = new Box(20);
obj.display();

let father = {
    name: 'john'
};
let son1 = {};
let son = Object.create(father);
console.log(father.isPrototypeOf(son));
console.log(father.isPrototypeOf(son1));


class Student{
    constructor(rollno,name){
        this.rollno=rollno;
        this.name=name;
    }

    attendance(){
        console.log(this.name+" is present.");
    }
}
var adam = new Student(23,'Adam');
adam.attendance();


function age_req(r_age){
    return function(age){
        return age>=r_age;
    };
};

console.log(age_req(18)(27));
console.log(age_req(16)(27));
console.log(age_req(21)(27));


let ob = {
    name: 'fur',
    prnt: function(){
        console.log('a', this);
        var an_prnt = ()=>
        {
            console.log('b',this);
        }
        an_prnt();
    }
};
ob.prnt();



let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name +" is eating " + a +" " + b);
    }
};
let human = {
    name: 'Matt',
};
animal.eat(5, 'bones');
animal.eat.call(human, 2, 'bananas');
animal.eat.apply(human, [11, 'grapes']);

let human_eat=animal.eat.bind(human);
human_eat(24, 'pistachios');


let ob = {
    prnt: function(){
    console.log(this);
    }
};
ob.prnt();


var arr = [1,2,3,4,5];
console.log(arr[2]);

var arr1 = [2,34,5,6,,77];

console.log(arr1[4]);

arr.push("faizan");

arr.push("taz");

console.log(arr.pop());

arr.unshift(1000);
arr.unshift(10);
console.log(arr[0] +", " +arr[1]);

console.log(arr);

arr.shift();

console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);


arr.splice(1,3,"9999");

arr.splice(0,3);

var b_arr = [1,2,3,4,5,6];

var new_barr = b_arr.slice(0,4);

console.log(new_barr);

var c_arr = [11,12,13,14,15,16];
var new_carr = c_arr.slice(3);
var new_carr2 = c_arr.slice(3,7);

console.log(new_carr);

console.log(new_carr2);


console.log(print(5,7));

var a= 0;
console.log(a);
print();
function print()
{
    console.log("print function has been loaded");
    var b = 0;
    a=10;
    return a+b;
}
console.log(a);


var prnt = function(){
    console.log("awesome");
}

prnt();


(function(a, b){console.log(a+b);})(4,4);





for(let n=0;n<5;n++)
{
    console.log(n);
}







var a ="fauza";

console.log(a +" is 24 years old");
console.log(`${a} is 24 years old`);

var obj = {
    name: "faizan",
    roll_no: 10,
    sing: function(){
        console.log(`${this.name} sings`);

    }
};
console.log(obj.name);
obj.sing();
console.log("roll_no= "+obj["roll_no"]);







const a=10;
console.log('a= '+a);

for (let n =0; n<5; n++)
{
    console.log(n);
}

console.log(n);


console.log("!");
console.log("!");
console.log("!");
/*console.log("!");
console.log("!");
console.log("!");
console.log("Hello?");
console.log("!");
//console.log("!");
console.log("Bye!");


// JS is 'dynamically typed': only 'let', 'var', and 'const' are used for variable declaration
// JS is 'weakly typed': when comparing 2 values of different types, one type will force the other to change so a comparison can be made, unless '===' is used to stop coercion

//variables should begin with a 'letter', '$', or '_', and cannot match any keywords, as they are reserved for special purposes


var a = 1;
var b = 2;

if(a+b>4)
{
    console.log(a+b);
}
else if (a+b<1)
{
    console.log(a+b);
}
else
{
    console.log("hi");
}


for(var num=0;num<11;num=num+2)
{
    console.log(num);
}


let fruits=['apple','peach','orange', 'watermelon']
fruits.forEach(item => console.log(item));


let berries=['blackberry','strawberry','raspberry', 'cherry']
for(item of berries)
{
    console.log(item);
}



var a = [1,3,5,7,25];

a.forEach(item => console.log(item));

//use 'of' to call out the items within the array
for(var item of a)
{
    console.log(item);
}
//use 'in' to call out position in array
for(var item in a)
{
    console.log(item);
}


var i=0;
while (i<5)
{
    console.log('current value of i: '+i);
    i++;
}


var i=0;
do
{
    console.log('current value of i: '+i);
    i++;
}while(i<5)


var itr = 10;
console.log(itr++);
console.log(itr);
console.log(++itr);
console.log(itr);


var num1=8, n=3;
//binary of 8 is 000000...0001000, 
//binary of 2 is 000000...0000001

console.log(num1>>n); //"right shift 'n' times"
console.log(num1<<n); //"left shift 'n' times"

var a=2;
console.log((a==2)?console.log("ok"):console.log("not ok")); */