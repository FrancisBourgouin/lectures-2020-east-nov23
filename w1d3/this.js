const somethingElse = {
  name: "The function with no name",
  anotherName: "For a few methods more",

  showThings: function () {
    return this.name
    // return somethingElse.name
  }
}

const bob = {
  showThings: function () {
    return this.name
    // return somethingElse.name
  }
}

console.log(somethingElse.showThings())


const thisIsHaha = function () {
  return this
  // return somethingElse.name
}

console.log(thisIsHaha())