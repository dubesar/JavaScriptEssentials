let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push("to")
secretMessage.push("Program")

const ind = secretMessage.indexOf("easily")
secretMessage[ind] = "right"

secretMessage.shift()

secretMessage.unshift("Programming")
console.log(secretMessage)

secretMessage = secretMessage.slice(0,6).concat(["know"]).concat(secretMessage.slice(11,secretMessage.length)) //concats arrays

console.log(secretMessage) 
console.log(secretMessage.join()) // joins the array
