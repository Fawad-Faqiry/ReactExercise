//////////////////////// 1 //////////////////////////////
// let salaries = [100, 20, 3000, 4000];

// let newSalaries = salaries.map((salary) => {
//     return salary + 500;
// });

// newSalaries.forEach(element => {
//     console.log(element);
// });



let numbers = [23, 33, 34, 55, 45];

let newNumber = numbers.map((number) => {
    return number + 30;
})

newNumber.forEach( (newScore, index) => {
    console.log( index + 1, newScore);
})