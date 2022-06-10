//Q.1 Difference between “ == “ and “ === “ operators.

// ANS===>These are the comparision operators. they always return Boolean Value like true and false
//    == it compaires only the value,
//    === it compaires vale and its data type as well

// var x=100;
// var y="100";
// console.log(x==y);// true

// var a=10;
// var b="10";
// console.log(a===b);//false

// Q.2 What is the spread operator?

// ==> spread operator looks like this ...
// it is used to destructure the itrable elemenmts like object and array.
// let obj1={name:"john", age:23};
// let obj2={country:"India" ,...obj1};
// console.log(obj2);

//spread operator used to shallow copy objects.
// const body={
//     eyes:true,
//     nose:true
// }

// const brain={
//     iq:null
// }

// let Person={
//     ...brain,
//     ...body
// }
// console.log(Person)

//Q.3 What are the differences between var, let and const?

// Q.4 What is execution context?

//What is execution context ? 

// ANS==>Execution context is a concept inside JS engine. When we run any JS code then how that 
// file will be executed depends on execution context. This EC will be pushed to Call Stack.
// It is of two types: Global and Functional
// The moment you run the file, global execution context GEC will be created. Inside this we are having two phases first
//  is memory allocation and another is code execution
//  Inside memory allocation, variable and function will get allocated with memory. Variables get assigned with undefined
//  value and functions get actual value.
//  Once the memory allocation is done then the code execution phase will start in this variables get their actual 
// assigned and functions will be executed.
//  The moment any function comes in code execution a new Function execution context will be created and it will 
// be pushed to call stack which will again have MA and CE inside it.
//  Once the function execution is completed then this FEC will be removed from the call stack then we will come back
//  to the GEC.

//Q. what is higher order fun ?

//the fun which takes another fun as an argument or the fun which accept another fun as an argument is called hof.

// function a (b){
//     return function (){
//         console.log("hey");
//     }
// }
// const b = () => {
//     console.log("hello");
// }

// a(b);



//Q.5 What is meant by first class functions
// ==> first class fun is a fun which can be passed as an argument inside a another fun.

   

// function sum(a,b){
//     return a+b;

// }

// function sumcall(sum){
//     return sum(2,6);
// }


// console.log(sumcall(sum));


// Q.6 What are closures?
 
// ==> it is a combination of inner function and lexical environment created by inner fun.

//lexical Enivironment ==>
//A Lexical Environment is a specification type used to define the association of
// Identifiers to specific variables and functions 

// function outer(){
//     let a=10;

//     function inner(){
//         console.log(a);
//     }

//     inner();
// }

// outer();

//Q.7  Explain call(), apply() and, bind() methods.

// ** call() method => in case of call method each and every argument which is required to be passed  to the fun will be 
//passed individually.

                    // a function inside a object is called method

               

//         const user1={
//                        name: "raj",
//                        age:24,
//                        salary:60000
//                     }

//                  function displayuserdtil( company , position){
//                  console.log(this.name +" is " +this.age + " years old " +" and  is salary is " + this.salary + " " +  company , position )
//                 }

//                      displayuserdtil.call(user1 , "tcs" ,"developer");

// ** apply() method ==> in case of apply each and every argument which is required to be passed  to the fun will be passed 
// inside an array.

//                 const user2={
//                               name:"Hershita",
//                                age:25,
//                                salary:100000,
//                               }

//                        function displayuserdtil( company , position){
//                    console.log(this.name + " is " + this.age + " years old " + " and his salary is " + this.salary +" " + company,position)
//                        }

//                        displayuserdtil.apply(user2,["prepbytes" ," Teacher "])



// bind() method => in case of bind it will return you a new fun. and this new fun you can use anytime anywere .

//Q.8 What are promises and why do we need them?

// promise is js object which tells weather a asynchronous task will be resolved or not.

// 
// Why need Promise ?
// JavaScript is always synchronous and single-threaded language. It means JavaScript
//  never wait for code or function result when they take some time. Js direct excute next code

// promises are used to handel asynchronous operations in js they are easy to manage when dealing with 
// multiple asnychronous  operations when callbacks can create callback hell leading to unmanageble code.
 
// let data = new Promise((reslove ,reject)=>{
//     setTimeout(()=>{
//         reject("some issues")
//     })
// })

// data.then((item)=>{
//     console.log(item)
// }).catch((error)=>{
//     console.log("catch block",error)
// })


//Q.9 prototype in js / prototype object ?
// jS is a prototype based language, so whenever we create a function using JavaScript.
// jS engine adds a prototype property inside
// function, prototype property is basically an object (also known as a prototype object ]
// where we can attach methods and properties.
// in a prototype object which enables all the
// other objects to inherit these methods amel
// properties.

//Q.15  Explain prototypes.
//prototype is a property used to apply inhertance in j.s.
// Ans: Prototypes are objects in javascript from which other objects can inherit properties.
// __proto__ can be be used to define a prototype object.
// These inherited properties are hidden by default but can be accessed by the object which inherits the prototype.
// let animal = {
//     eats: true,
//     moves: true
// }
// let rabbit = {
//     jumps: true,
//     __proto__:animal.
//     // __proto__: animal
// }
//rabiit inherits from animal.




// Q.11 What are function constructors?

// Ans: They are just like regular functions used to create objects.
// They are called with new keyowrd.
// Good practice to capitalize first letter of the constructor function.
// When the function is executed with new keyword 2 things happen:
// 1) it creates an empty object and assigns that empty object to this keyword.
// 2) Returns this( which is object created by the function)

// fucntion Person(name, age) {
//     this.fname = name,
//     this.myAge = age
// }
// const person1 = new Person("onkar", "23");



//Q.10 What is hoisting?
// Hoisting is js mechanism where var and fun declaritions moved to the top of their current scope before code execution
//only normal functions are hoisted not arrow or first class or anonymous functions.
//only variable with var is hoisted not let and const.



//Q.11 Q.13 What is the DOM?

//What is DOM?
//What is the DOM? The Document Object Model (DOM) is a programming interface for web documents. 
//It represents the page so that programs can change the document structure, style, and content.
 //The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// Q.15 How many operators do we have in JS ?
//an operator is a special symbol used to perform operations on operands (values and variables).
// many operators in js like..
// Ans: Arthimetic => +, -, *, %, ++, -- to perform mathematical operations
// Comparison => ==, ===, !=, !==, >, <, <=, >=
// Logical => &&(and), || (or), !(not)
// Bitwise => & (and), | (or), ~(not), ^(xor), <<(left shift), >>(right shift)
// Ternary => variableName = (condition) ? value1 : value2


//
// Q.14 Difference between undefined vs not defined vs NaN

// Ans: undefined => When we declare a variable and do not assign any value to it, it by default gets the
// value assigned known as undefined in javascript.
// typeof (undefined) gives us undefined.

// let a ;
// console.log(a)


// not defined => (When we try to access vairable which is not declred )then we encounter Reference Error saying 
//variable is not defined.
// console.log(a)

// NaN => It is known as Not a Number. It denotes that value of object is not a number.
// e.g. sqrt(-1)
// and any arthimetic operation wih undefined will result in NaN


//Q.13 settimeout?

// it is a type of fun whenwhere we want to run it at certain time interval or we want to delay our fun 
// after certain time then we will use setimeout 
// it accepts two parameters 
// callback function  another is  timeinterval
//it is asynchronous fun it can be used in alarms ,remainders, delay some kind of execution.

// setTimeout(() => {
//     console.log("hello world")
    
// }, 2000);


//Q.14 callback hell ?

// it is an triangle like structure where we can handel asynchronous operations and having multiple callback
//leads to hand to debug to devlopers and it will be problem to.



// function call(){
//     setTimeout(() => {
//         console.log(1);

//         setTimeout(()=>{

//             console.log(2);

//         },1000);

//         setTimeout(()=>{
//             console.log(3);
//         },2000);

//         setTimeout(()=>{
//             console.log(4);
//         },3000)
//     },4000 );
// }

// call();

//Q.14 What is promise chaining

//excute two or more asynchronous operatios back to back.

// let data=new Promise((resolve ,reject)=>{
//        setTimeout(()=>{
//        resolve(10);
//        },2000)
// })

//  data.then((item)=>{
//      console.log(item);
//      return item*10;
//  }).then((item)=>{
//      console.log(item);
//      return item*10;
//  }).then((item)=>{
//      console.log(item);
//      return item*10;
//  });



//Q.17 What is temporal dead zone in es6?

// The let and const variables are not accessible before they are initialized with some value, and the phase between
//  the starting of the execution of block in which the let or
//  const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable


// let b;
// const c;

// console.log(b);
// console.log(c);


//Q.18   what is this keyword;

//this refers to its parent object;

// var a={
//     fname:"omii",
//     lname:"patil",

//     fullname :function(){
//         console.log(this.fname + " " +this.lname);
        
//     }
// }

// console.log(a.fullname());


//Q.19 Function Currying ?....copy

//It is a technique of evaluating fun with
//  multiple arguments into sequence of fun with single argument.

// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return (a+b+c+d);
//             }
//         }
//     }
// }
// console.log(sum(2)(5)(6)(10));
//FUNCTION CURRYING

// function add (a) {
// 	return function (b){
// 		return function (c){
// 			console.log(a+b+c)
// 		}
// 	}
// }

// let b = a()
// b()
// let c = b()
// c()

// a()()()


//If a function is returning another function then to execute that we will have to create a new variable 
//and then execute or invoke that variable which would be expensive from the memory perspective . function currying 
//lets you execute the returned function with the main funtion name only and you wont have to create a new variable
// for that.



//Q.20 	what is Symbol ?

//Symbol is a built-in object whose constructor returns a
// symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.

//it is data type (premative),it is a unique value.

// var x=Symbol("omii");
// console.log(x ,typeof(x));

// //if we want only symbol val then write
// console.log(x.description);


//Q.21  What is the for-in loop in JavaScript? Give its syntax

//The for loop repeats a block of code as long as a certain condition is met. It is typically
// used to execute a block of code for certain number of times. Its syntax is: for(initialization; condition; increment) 

// Q. how j.s is used in backend devlopment.?

//Backend developers use a type of JavaScript called Node. js for backend work. The Node. js framework 
//allows a developer to handle data updates from the
 //front end and build scalable network applications able to process many simultaneous user requests, 
 //amongst other things

 //Q. what is j.s engine ?

 //    A JavaScript engine is a software component that executes JavaScript code.
 // crome has v8 engine 
 //javascript runs in browsers by using js engine, which converts javascript code into the binary 
 //instructions (machine code) that a Computer can understand.and execute it.

 // different browsers has built different engines to convert it, chorme has v8, firefox 
 //has spidermonkey, edge has charka.
 //To convert javascript code to machine code, a parser checks for syntax and this code is converted to 
 //Abstract syntax tree which is hirerarchial tree like structure which allows interpreter to understand the program


 //Q what is typeof operator in js
 //Typeof in JavaScript is an operator used for type checking and returns the data type of the operand passed to it.


//Q.  What is Anonymous Functions ?
//the fun which have no name is called anonymous fun.
// arrow fun is also called anonymous fun.

// let a= ()=>{

//     var a=10;
//     console.log(a);
// }
//  a();

//Q.  Function Declaration vs Function expression


// function add (){
	
// }

// they will be hoisted because they are functions. means they will get memory at the time of memory allocation itself



// Function expression
// const add = function (){
	
// }
// they will not be hoisted because they are variables now who dont get memory at the time of memory allocation




//Q.callback function
//Q. what is the purpose of callbacks fun .
// 
//. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
//This technique allows a function to call another function. A callback function can run after another
// functionhas finished.

// function add(){
//     console.log("adding")
// }
// function sub(){
//     console.log("subtracting")
// }
// sub(add) ;
// add is callback here





//Q. what is fun generator in js.

//In JavaScript, a generator is a function which returns an object on which you can call next(). 
 //Every invocation of next() will return an object of shape —it contains two property val,done 

//  { 
//     value: Any,.                   ..val property contain value
//     done: true|false               .....done property boolean val like true and false.
//   } 


// Q.Can you explain why we use async-await

// async - makes a function return a promise
// await -await fun works inside a async fun . await makes fun wait for a promise

//..........async................

// async function test(){
//     return "hello world"
// }
// console.log(test());


// async function test (){
//     return ("hello world");
// }

// test().then((result)=>{
//     console.log(result)
// })

//.........await......... await method is used when we fetch dada from server /
//why use await- in line wait is overthere when we want some data from api then fun take some some to fetch that data
// so we use await method 

async function test(){
    console.log("2 : message");
   await console.log("3 : message");
    console.log("4 : message");

}
console.log("1 : message");
test();
console.log("5 : message");
