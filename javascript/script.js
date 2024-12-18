// var a=10;
// console.log(a);


// *************temporal deadzone***********************
// console.log(a);
// let a=10;

// console.log(c)
// let c;

// *********************var let const*************************?

// console.log("start");
// let a=10;
// console.log(b);
// {
//     var b =200;
// }
// console.log(a);
// console.log(b);
// console.log("end");

// ****************************************************************

// console.log("start");
// let a=10;
// {
//     console.log(a);
//     let a =10;
// }
// console.log(a);
// console.log(b);
// console.log("end");

// ***********************************************************

// console.log("start");
// var b=20;
// const c=30;
// {
//     let a=100;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log("end");

// *********************************

// console.log("start");
// let a=10;
// var b=20;
// const c=30;
// {
//     let a=10;
//     console.log(a);
//     const c=300;
//     console.log(b);
//     b=200;
//     c=30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// console.log("end");

// **********************function******************************

// function sayHello(){
//     console.log("good morning");

// }
// console.log(sayHello);
// sayHello()
// =================================================
// console.log(("10"+"1")-1=== 100); ///logicl qu
// ====================================================
// function display(){
//     console.log("Hello");
// }
//     display()
//  ===========================================

// let a=10;
// function display (name,age){
//     console.log(name);
//     console.log(age);

// }
// display("monu",20);

// ======================================

// let a=20;
// var b=30;
// greet ()
// function greet(){
//     console.log("hello");
// }

// ==========================

// function sum (a,b,c){
//     console.log(a+b+c);
// }
// sum(10,20,30)

// ================Expression functionn=============

// let greet=function(){
//     console.log("Hello");
// }
// greet();
// console.log(greet);
// =================================================
// greet()
// var greet = function(){
//     console.log("Hello");
// }
// console.log(greet);

// =====================================================

// let greet =function(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(82,43,33);
// ==============================================
// (function greet (){
//     console.log("hello world");
// })()
// =====================================

// let number =+prompt("Enter the numnber")
// (function(num){
//     console.log('square of ${num} is :$(math.pow(num2)}');
//     console.log('cube of ${num}is: $(num*num*num}');
// })
// (num)

// ============================================================

// let a=+prompt("Enter the number");
// let digitsum=a =>{
// let count=0;
// sum=0;
// let rem=0;
// while(a>0){
//     rem =a%10;
//     a=Math.floot(a%10);

// }
// return sum;

// }
// console.log(digitsum(num));


// let result =num ==0; 1;Math.floor(Math.log10(num)+1)

// console.log(result);


// =======================
function outer(){
    
let obj ={};
let num=document.querySelector("#input").value;
let number =(num) =>{
    let count=0;
    let temp = num;
    let sum  = 0;
    // obj = {}
    let rem;
    
    while(num>0){
        rem = num%10;
        sum += rem;

        count++;
        num=Math.floor (num/10);

    }
    obj = {temp,count , sum}
    console.log(obj);

    
let numberBox = document.querySelector(".number")
let sumBox = document.querySelector(".sum")
let countBox = document.querySelector(".count")
numberBox.innerHTML +=  "<br>"+ obj.temp 
sumBox.innerHTML += "<br>"+obj.sum
countBox.innerHTML +="<br>"+ obj.count

    

    // return console.log("number is = "+ temp +" sum is = "+ sum + " count is = "+ count);
}
return number;
}
let btn = document.getElementById("btn")
let  number(num)









