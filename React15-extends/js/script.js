class House {
  constructor(name, color, height, width, roome_numbers) {
    this.name = name;
    this.color = color;
    this.height = height;
    this.width = width;
    this.roome_numbers = roome_numbers;
  }

  isOpen() {
    console.log(this.name, " is open");
  }
}

class Apartment extends House {
  constructor(name, color, height, width, maxFloor) {
    super(name, color, height, width);

    this.maxFloor = maxFloor;
  }

  isOpen() {
    super.isOpen();
  }
}

let FawadPlaza = new Apartment("Fawad Plaza", "White", "300m", "50m", 100);

console.log(FawadPlaza, FawadPlaza.isOpen());
