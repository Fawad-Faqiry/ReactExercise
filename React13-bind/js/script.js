function showAge () { 
    console.log(this.age);
 };

let userOne = {
    id: 1,
    name: 'Fawad',
    age: 34
};

let userTwo = {
    id: 2,
    name: 'Ahmad',
    age: 33
};

let showUserOne = showAge.bind(userOne);

showUserOne();