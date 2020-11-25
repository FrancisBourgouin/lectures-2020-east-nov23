// Why arrays ? List independent items

const listOfNames = ["Poulet", "Chicken", "Pollo"]
listOfNames.push("Murghi")

// listOfNames = ['a', 'b', 'c'] will break since const

const value = 42
// value = "*"

const anotherList = listOfNames


// Objects (Key value tuple (pair)) - List dependent items

const listOfNamesObj = {
  fr: "Poulet",
  en: "Chicken",
  es: "Pollo",
  ur: "Murghi"
}


const listQuestionMark = ["Francis", "Bourgouin"]
const propsQuestionMark = {
  firstName: "Francis",
  lastName: "Bourgouin"
}

// I want to create a grocery list with : Yogurt, Flour, Olive oil, salt

const groceryList = [{ name: "Yogurt", price: 4.99 }, 'Flour', 'Olive oil', 'salt']

for (const groceryItem of groceryList) {
  if (groceryItem.name === "Yogurt") {
    groceryItem.price = 5.99
  }
}

const groceryListObj = {
  yogurt: {
    name: "Yogurt",
    price: 4.99
  },
  potato: {
    name: "Potatoes",
    price: 44.99
  }
}
groceryListObj.yogurt.price = 5.99

const yogurt = "yogurt"
const price = "price"

groceryListObj[yogurt][price] = 5.99
groceryListObj["yogurt"]["price"] = 5.99


const fetchPrice = function (key) {
  return groceryListObj[key].price
}

console.log(fetchPrice('potato'))
console.log(fetchPrice('yogurt'))

const addNumbers = function (a, b) {
  return a + b
}