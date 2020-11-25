const someList = ["Laptop", "Mic", "Webcam", "Pollo"]

const anotherList = []

for (const element of someList) {
  anotherList.push(element)
}

const tree = {
  name: "Maple tree",
  age: 20,
  type: "leafy"
}

const anotherTree = {}

for (const key in tree) {
  anotherTree[key] = tree[key]
}