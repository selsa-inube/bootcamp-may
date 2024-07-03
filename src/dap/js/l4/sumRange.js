const range = (start, end, increment = 1 ) => {
  let arr = [];
  if (increment < 0) {
    for (let i = start; i >= end; i+=increment) arr.push(i);
  }else {
      for (let i = start; i <= end; i+=increment) arr.push(i);
  }

  return arr;
}

const sumRange = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(range( 1 , 10 ));
console.log(range( 5 , 2 , - 1 ));
console.log(sumRange(range( 1 , 10 )));