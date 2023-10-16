let a = 7;
let b=2;
let sum = a+b;
let sub = a-b;
let Multiplay = a*b;
let divide = a/b;
let modulus = a%b;
document.write(`<h1>Question 1:~<h1> <br>`)
document.write(`<h2>Sum of ${a} and ${b} is: ${sum}</h2>`)
document.write(`<br><h1>Question 2:~<h1>`)
document.write(`<h2>Subtract of ${a} and ${b} is: ${sub}</h2>`)
document.write(`<h2>Multiply of ${a} and ${b} is: ${Multiplay}</h2>`)
document.write(`<h2>Division of ${a} and ${b} is: ${divide}</h2>`)
document.write(`<h2>Modulus of ${a} and ${b} is: ${modulus}</h2>`)
document.write(`<br><h1>Question 3:~<h1>`)
document.write(`<h2>Value after variable declaration is: Undefine.</h2>`)
document.write(`<h2>Initial value: is: ${a}.</h2>`)
document.write(`<h2>Value after increment is: ${b}.</h2>`)
document.write(`<h2>Value after decrement is: ${sub}.</h2>`)
document.write(`<h2>The remainder is : ${modulus}.</h2>`)
document.write(`<br><h1>Question 4:~<h1>`)
let ticket=600;
document.write(`<h2>Total cost of 5 tickets is : ${ticket*5} PKR.</h2>`)
document.write(`<br><h1>Question 5:~<h1>`)
document.write(`<h2>Table of 4</h2>`)
 for(var i=1;i<11;i++){
    var tablenum=4;
    document.write(`<h4>${tablenum} X ${i} = ${tablenum*i}</h4>`)
 }
document.write(`<br><h1>Question 6:~<h1>`)
 let Celsius=97;
 let f=(Celsius*(9/5))+32;
 document.write(`<h4>${Celsius} °C is ${f} °F</h4>`)
 let forn=30;
 let c=(forn-32)*5/9
 document.write(`<h4>${forn} °F is ${c} °C</h4>`)
document.write(`<br><h1>Question 7:~<h1>`)
document.write(`<h2>Shopping Cart</h2>`)
let price1=650;
let price2=100;
let charges=100;
document.write(`<h4>Price of item 1 is ${price1} <br>
Price of item 2 ${price2} <br>
Ordered quantity of item 1 is 3<br>
Ordered quantity of item 2 is 7<br>
Shipping Charges is ${charges}<br>
Total Cost of your order is ${price1*3+price2*7+charges} <h4>`)
document.write(`<br><h1>Question 8:~<h1>`)
document.write(`<h2>Mark Sheet</h2>`)
let totalMark=980;
let Mark=804;
document.write(`<h4>Total Marks: ${totalMark}<br>
Obtained Marks: ${Mark}<br>
Presentage: ${(Mark/totalMark)*100}%</h4>`)
document.write(`<h1>Question 9:~<h1>`)
document.write(`<h2>Currency in PKR</h2>`)
document.write(`Total Currency in PKR: ${(5*104.80)+(25*28)}`)
document.write(`<h1>Question 10:~<h1>`)
document.write(`<h4>${a+5*10/2}<h4>`)
document.write(`<h1>Question 11:~<h1>`)
let currentyear=2023;
let birthdate=2000;
document.write(`<h4>Current year: ${currentyear}<br>
Birth date: ${birthdate}<br>
Your age is:  ${currentyear-birthdate}</h4>`)
document.write(`<h1>Calculate properties of a circle:~<h1>`)
let redius=20;
document.write(`<h4>Radius of Circle is: ${redius}<br>
Area of Circle is: ${3.142*(redius**2)}<br> 
The circumference of Circle is: ${2*3.142*(redius)}`)


