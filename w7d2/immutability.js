const veryOriginal = [1, 2, 3, 4, 5, 6]
const veryFunky = [{ a: 1 }, { b: 2 }]

console.log(veryOriginal.pop())
console.log(veryOriginal)

const purePop = (array) => {
  const buffer = [...array] // shallow copy
  // const buffer = []
  // for(const element of array){
  //   buffer.push(element)
  // }
  return buffer.pop()
}

const output = purePop(veryFunky)
console.log(output)
console.log(veryFunky)

output.b = "ninja"
console.log(output)
console.log(veryFunky)

const someObject = { name: "Bob" }

someObject.likesChicken = true
someObject["likesChicken"] = true

const someOtherObject = { ...someObject, height: 'dunno' }