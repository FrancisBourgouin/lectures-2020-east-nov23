// Classes in Javascript

// Class vs Object ??

class Car {
  constructor(model, colour, engine) {
    this.model = model
    this.colour = colour
    this.engine = engine
  }
}

class ExpensiveCar extends Car {
  constructor(model, colour, engine) {
    super(model, colour, engine)
    this.blinkers = 'broken'
  }

  accelerate = function () {
    console.log(this.engine + " goes vroom !")
  }
}


const ae86 = new Car('AE86', 'white', 'very big')
const delorean = new Car('Delorean', 'Stainless Steel', 'Not fast, but don\'t go over 88mph')
console.log(ae86)
console.log(delorean)

const marcielago = new ExpensiveCar('Marcielago', 'Red', 'Very very big')
console.log(marcielago)
marcielago.accelerate()