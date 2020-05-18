const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant' //finds all the index of the elephants
})

const startsWithS = animals.findIndex(s => {
  return s[0] === "s" //all the elements starting with s
}) 
