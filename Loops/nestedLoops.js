const bobsFollowers = ["Alex", "Mateo","Carie","Marie"]

tinasFollowers = ["Alex","Carie","John"]

let mutualFollowers = []

for(let i = 0; i < bobsFollowers.length ;i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}

console.log(mutualFollowers)
