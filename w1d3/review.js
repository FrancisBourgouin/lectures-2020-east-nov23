const obj = {}

obj.someKey = "someValue"
obj.someKey = "Something else"

const key = "ryan"
const value = "bee"

obj.key = value  // litteraly adding the key called key
obj[key] = value

// obj.key = null
delete obj.key
// Guess1 : {somekey.. , key:..., ryan: ...}
// Guess1 : {somekey.. , ryan: ...}
console.log(obj)

powerObject.type.name.surname.shortcut
powerObject["type"]["name"]["surname"]["shortcut"]