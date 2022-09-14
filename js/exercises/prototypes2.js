// Prototype practice part 2

function Computer(type, cpu, ram) {
  this.type = type;
  this.cpu = cpu;
  this.ram = ram;
}

Computer.prototype.list = function () {
  console.log(`${this.type}, ${this.cpu}, ${this.ram} RAM`);
};

function Desktop(cpu, ram, monitorSize) {
  Computer.call(this, "Desktop", cpu, ram);
  this.monitorSize = monitorSize;
}

Desktop.prototype = Object.create(Computer.prototype);
Desktop.prototype.constructor = Desktop;

Desktop.prototype.boot = function () {
  console.log(`${this.type} is now booting`);
};

const myLaptop = new Computer("Laptop", "Intel", "32GB");
myLaptop.list();

const myPC = new Desktop("AMD", "16gb", '27"');

myPC.list(); // Computer Method
myPC.boot(); // Desktop Method
console.log(myPC instanceof Desktop);
console.log(myPC instanceof Computer);

// Class syntactical sugar version:

// class Computer {
//   constructor(type, cpu, ram) {
//     this.type = type;
//     this.cpu = cpu;
//     this.ram = ram;
//   }
//   list() {
//     console.log(`${this.type}, ${this.cpu}, ${this.ram} RAM`);
//   }
// }

// class Desktop extends Computer {
//   constructor(cpu, ram, monitorSize) {
//     super("Desktop", cpu, ram);
//     this.monitorSize = monitorSize;
//   }
//   boot() {
//     console.log(`${this.type} is booting!`);
//   }
// }

// const myLaptop = new Computer("Laptop", "Intel", "32GB");
// myLaptop.list();
// const myPC = new Desktop("AMD", "16gb", '27"');
// myPC.list();
// myPC.boot();
