// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num=prompt("check a even and odd number");
if(num % 2===0){
  alert("Even")
}
else{
  alert("Odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = +prompt("numA");
let numB = +prompt("numB");
if (numA>numB){
  alert(numA)
}
else{
  alert(numB)
}
// 3. Convert the above code using`?` terniary operator
let num1 = +prompt("num1");
let num2 = +prompt("num2");

num1 > num2 ?
alert(num1)
:
alert(num2)
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house=prompt("housename");

if(house=="stark"){
  alert(" Winter is coming")
}
else if(house=="lannister"){
  alert("A lannister always pays his debt")
}
else{
  alert(" All men must die")
}
// 5. Convert the above code using`?` terniary operator
let house1=prompt("housename")
house1=="stark" ?
alert(" Winter is coming")
:
alert(" All men must die")
house1=="lannister" ?
alert(" A lannister always pays his debt")
:
alert(" All men must die")
// Switch
let house2=prompt("housename")
switch(house2){
  case "stark":
    alert(" Winter is coming");
    break;
    case "lannister":
   alert(" A lannister always pays his debt")  
   break;
   default:
    alert(" All men must die"); 
}

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month=+prompt("write a month")
switch(month){
  case 1:
    alert(30)
    break;
    case 2:
    alert(28)
    break;
    case 3:
    alert(30)
    break;
    case 4:
    alert(31)
    break;
    case 5:
    alert(30)
    break;
    case 6:
    alert(30)
    break;
    case 7:
    alert(30)
    break;
    case 8:
    alert(30)
    break;
    case 9:
    alert(30)
    break;
    case 10:
    alert(30)
    break;
    case 11:
    alert(30)
    break;
    case 12:
    alert(30)
  
}
/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary=+prompt("in-hand");
switch(salary){
  case 20000:
    alert(18000)
    break;
    case 40000:
    alert(32000)
    break;
    case 50000:
    alert(45000)
    
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/


 let studentMark=prompt("mark")

if(studentMark > 100){
  alert(`"Marks can't be greater than 100"`)
}

else if(studentMark > 80){
  alert(`"Grade A"`)
}

else if(studentMark > 50){
  alert(`"Grade B"`)
}

else if(studentMark > 30){
  alert(`"Grade C"`)
}

else if(studentMark > 0){
  alert(`"Grade D"`)
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather=prompt("condition");
if(weather==`sunny`){
  alert(`Wear a T-shirt`)
}
else if(weather==`rainy`){
  alert(`Don't forget to take your raincoat`)
}
else if(weather==`hot`){
  alert(`Get a hanky`)
}
else if(weather==`freezing`){
  alert(`Get your sweeter on`)
}
else{
  alert(`Not a valid input`)
}