//        function constructor
/*
function House (name, color, height, width, roome_numbers){
    this.name = name;
    this.color = color;
    this.height = height;
    this.width = width;
    this.roome_numbers = roome_numbers;
}

let myHouse = new House('My House', 'lightBlue', '30m', '18m', 24);

console.log(myHouse);
*/

//                constructor class
class House {
  constructor(name, color, height, width, roome_numbers) {
    this.name = name;
    this.color = color;
    this.height = height;
    this.width = width;
    this.roome_numbers = roome_numbers;
  }
}

let myHouse = new House("My House", "lightBlue", "30m", "18m", 24);
console.log(myHouse);
