//===================//Result//===============//
let number = 10;
++number
number++
--number
number--
//===================//Result//=========Display======//
document.write("<h2>Result:</h2>")
document.write("The result of a is 10")
document.write("<br/>...........................................")
document.write("<br/><br/>The value of ++a is: "+ number)
document.write("<br/>Now the value of a is: 11")
document.write("<br/><br/><br/>The value of a++ is: 11")
document.write("<br/>The value of a++ is:"+ number)
document.write("<br/><br/><br/>The value of --a is: 11")
document.write("<br/>The value of a++ is: "+ number)
document.write("<br/><br/><br/>The value of a-- is: 11")
document.write("<br/>The value of a++ is: "+ number)
//===================//Result//========Console=======//
console.log("Math-Expression:")
console.log("Result:")
console.log("The result of a is 10")
console.log("...........................................")
console.log("The value of ++a is: "+ number)
console.log("Now the value of a is: 11")
console.log("The value of a++ is: 11")
console.log("The value of a++ is:"+ number)
console.log("The value of --a is: 11")
console.log("The value of a++ is: "+ number)
console.log("The value of a-- is: 11")
console.log("The value of a++ is: "+ number)

//===================//Resultk//=================//
let a = 2
let b = 1
var result = --a - --b + ++b + b--;

//===================//Result//========Display=======//
document.write("<br/><br/><br/>a is : "+a)
document.write("<br/>b is : "+b)
document.write("<br/>result is : "+result)
//===================//Result//========Console=======//
console.log("a is : "+a)
console.log("b is : "+b)
console.log("result is : "+result)

//========Program========//
let user = prompt("Greeting! \nPlease Input Your Name here :") 

//========Program=====Display===//
document.write("<br/><br/>My Name is: "+user)
//========Program====Console====//
console.log("My Name is "+user)

//============//table-5//=============//
let use = Number(prompt("Enter any number"))
let num = (use *5)

//============//table-5//========Display=====//
document.write("<br/><br/><br/>Your Multiplication number is: "+num)
//============//table-5//=======Console======//
console.log("Your Multiplication number is: "+num)

//========Subject-Total-Marks========//
// let English 
// let Math 
// let Urdu


//========Subject-Total-Marks=====Display=====//
// document.write("<br/><br/><br/><h3>Subject Total Marks Obtained Marks Percentage</h3>")
// document.write("English 100 \nMath")
// document.write("\nMath")
// document.write("Urdu")
//========Subject-Total-Marks======Console======//


// Step 1: Take input for three subject names
const subject1 = prompt("Enter the name of the first subject:");
const subject2 = prompt("Enter the name of the second subject:");
const subject3 = prompt("Enter the name of the third subject:");

// Step 2: Define total marks for each subject
const totalMarks = 100;

// Step 3: Take input for obtained marks in the first subject
const obtainedMarksSubject1 = parseInt(prompt("Enter the obtained marks for " + subject1 + ":"));
const obtainedMarksSubject2 = parseInt(prompt("Enter the obtained marks for " + subject2 + ":"));
const obtainedMarksSubject3 = parseInt(prompt("Enter the obtained marks for " + subject3 + ":"));
// Step 4: Calculate and display the obtained marks percentage for the first subject
const percentageSubject1 = (obtainedMarksSubject1 / totalMarks) * 100;
console.log("Subject: " + subject1);
console.log("Obtained Marks: " + obtainedMarksSubject1);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentageSubject1 + "%");
//===============Subject-Total-Marks=======Display========//
document.write("<br/><br/><br/>Subject: " + subject1);
document.write("<br/>Obtained Marks: " + obtainedMarksSubject1);
document.write("<br/>Total Marks: " + totalMarks);
document.write("<br/>Percentage: " + percentageSubject1 + "%");
// //===============Second-Subject==========//
const percentageSubject2 = (obtainedMarksSubject2 / totalMarks) * 100;
console.log("Subject: " + subject2);
console.log("Obtained Marks: " + obtainedMarksSubject2);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentageSubject2 + "%");
//=============Total-Marks============//
document.write("<br/><br/>Subject: " + subject2);
document.write("<br/>Obtained Marks: " + obtainedMarksSubject2);
document.write("<br/>Total Marks: " + totalMarks);
document.write("<br/>Percentage: " + percentageSubject2 + "%");
// //=============Third-Subject==============//
const percentageSubject3= (obtainedMarksSubject3 / totalMarks) * 100;
console.log("Subject: " + subject3);
console.log("Obtained Marks: " + obtainedMarksSubject3);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentageSubject3 + "%");
//================Total-Marks===============//
document.write("<br/><br/>Subject: " + subject3);
document.write("<br/>Obtained Marks: " + obtainedMarksSubject3);
document.write("<br/>Total Marks: " + totalMarks);
document.write("<br/>Percentage: " + percentageSubject3 + "%");

//===========================END=======================//