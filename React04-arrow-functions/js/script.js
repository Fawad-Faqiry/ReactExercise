/////////////////////// 1 /////////////////

// let arroFunction = () => {};

//////////////////////// 2 ////////////////////
/*
let arrowFunction = (number) => number + number;

let rusult =  arrowFunction(3);

console.log(rusult);
*/

//////////////// 3 //////////////////////
/*
let arrowFunction = number => number * 2;

console.log(arrowFunction(3));
*/

////////////////// 4 ////////////////////
/*
let arroFunction = (firstNumber, secondNumber) => firstNumber * secondNumber;

console.log(arroFunction(2, 2));
*/

/////////////////// 5 ///////////////////
/*
let arroFunction = (firstNumber, secondNumber) => {
 return "This is first Number : " + firstNumber + " and This is Second Number :" + secondNumber;
};

console.log(arroFunction(4, 6));
*/

//////////////////////////// 6 ///////////////////
/*
let arroFunction = (...numbers) => numbers;

console.log(arroFunction(1, 3, 4, 5, 7));
*/

$(document).ready(() => {
  $(".show_name")
    .html("Fawad")
    .css("font-size", "100px")
    .css("color", "white")
    .css("text-align", "center")
    .hover(() => {
      $(".show_name")
        .css("box-shadow", "0 0 20px red")
        .mouseleave(() => {
          $(".show_name").css("box-shadow", "0 0 0 0");
        });
    });
});
