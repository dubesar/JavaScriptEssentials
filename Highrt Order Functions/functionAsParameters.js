const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

const checkConsistentOutput = (fun , value) => {
  let a = fun(value)
  let b = fun(value)
  if(a === b) {
    return a
  }
  else{
    return 'This function returned inconsistent results'
  }
}
checkConsistentOutput(addTwo,2)
