const tree = {
  name: "Maple tree",
  age: 20,
  type: "leafy"
}

console.log(tree)

const modifyTree = function (tree, newAge) {
  tree.age = newAge
}

console.log(tree)

modifyTree(tree, 40)

console.log(tree)


let total = 0

const addToTotal = function (currentTotal, valueToAdd) {
  return currentTotal += valueToAdd
}

addToTotal(total, 40)

total = addToTotal(total, 40)
// total += 40

console.log(total)