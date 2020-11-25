// Object methods ?

const tree = {
  name: "Maple tree",
  age: 20,
  type: "leafy"
}

console.log(Object.keys(tree))
console.log(Object.values(tree))

const listOfValues = Object.values(tree)

for (let i = 0; i < listOfValues.length; i++) {
  console.log(listOfValues[i])
}

for (const value of listOfValues) {
  console.log(value)
}

const listOfNumbers = [1, 2, 3, 4, 5]

for (const number of listOfNumbers) {
  console.log(number)
}


// Methods!

const someObject = {
  number: 42,
  string: "What can I write",
  isFalse: false,
  obj: { a: 1, b: 2 },
  list: [1, 2, 3, 4, 5],

  bark: function () {
    console.log("Woof woof.")
  }
}

const someObjectBark = someObject.bark

someObjectBark()